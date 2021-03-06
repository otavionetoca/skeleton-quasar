/* eslint-disable no-underscore-dangle */
import Skeleton from './Skeleton'

import Field from 'src/app/Prototype/Prototype/Field'
import FieldForm from 'src/app/Prototype/Prototype/FieldForm'
import FieldIs from 'src/app/Prototype/Prototype/FieldIs'
import FieldTable from 'src/app/Prototype/Prototype/FieldTable'
import Action from 'src/app/Prototype/Prototype/Action'

/**
 * @typedef {Prototype}
 */
export default class Prototype extends Skeleton {
  /**
   * @type {Array}
   */
  static mixins = [Field, FieldForm, FieldIs, FieldTable, Action]

  /**
   * @override
   */
  configure () {
    // will override by prototypes
  }

  /**
   * @override
   */
  configureIndex () {
    this.fetchRecords()
  }

  /**
   * @override
   */
  configureAdd () {}

  /**
   * Configs para quando o scope for 'edit'
   * @override
   */
  configureEdit () {
    this.fetchRecord(this.$route.params[this.primaryKey])
  }

  /**
   * @override
   */
  configureView () {
    Object.keys(this.components).forEach(key => {
      this.setFieldAttrs(key, { readonly: true, disable: true })
    })
    this.fetchRecord(this.$route.params[this.primaryKey])
  }

  /**
   */
  add () {
    this.$browse(`${this.path}/add`, true)
  }

  /**
   */
  back () {
    this.$browse(-1)
  }

  /**
   * @param {Object} record
   * @param {Array} records
   * @returns {Object}
   */
  view ({ record, records }) {
    if (Array.isArray(records) && records.length) {
      record = records[0]
    }
    if (record) {
      this.$browse(`${this.path}/${record[this.primaryKey]}`, true)
    }
  }

  /**
   * @param {Object} record
   * @param {Array} records
   * @returns {Object}
   */
  edit ({ record, records }) {
    if (Array.isArray(records) && records.length) {
      record = records[0]
    }
    if (record) {
      this.$browse(`${this.path}/${record[this.primaryKey]}/edit`, true)
    }
  }

  /**
   * @param {Object} record
   * @returns {Object}
   */
  cancel (record) {
    this.$browse(`${this.path}`, true)
  }

  /**
   * @param {string} scope
   * @param {Object} record
   * @returns {Object}
   */
  save (scope, record) {
    let method = 'create'
    if (scope !== 'create') {
      method = 'update'
    }

    this.$q.loading.show()
    const success = (response) => {
      if (this.debuggers) {
        window.alert(JSON.stringify(response))
      }
      this.$message.success(this.$lang(`prototype.operations.${scope}.success`))
      if (scope === 'create') {
        this.$browse(`${this.path}/${response[this.primaryKey]}/edit`, true)
      }
    }
    const fail = () => undefined
    const always = () => this.$q.loading.hide()

    return this.service[method](record).then(success).catch(fail).finally(always)
  }

  /**
   */
  defaults () {
    const prototype = this

    this.hook('created:default', function () {
      // Call component initialize method
      if (this.initialize && typeof this.initialize === 'function') {
        this.initialize()
      }

      // Call global prototype configure
      prototype.configure.call(this)

      // Call configure of each field
      this.configure()

      if (this.scope === 'index') {
        // Call configure to index scope
        return prototype.configureIndex.call(this)
      }

      if (this.scope === 'update') {
        // Call configure to update scope
        return prototype.configureEdit.call(this)
      }

      if (this.scope === 'read') {
        // Call configure to read scope
        return prototype.configureView.call(this)
      }

      if (this.scope === 'create') {
        // Call configure to create scope
        return prototype.configureAdd.call(this)
      }
    })

    this.action('add')
      .actionScopes(['index'])
      .actionPositions(['table-top'])
      .actionIcon('add')
      .actionColor('primary')

    this.action('back')
      .actionScopes(['index', 'create', 'read', 'update'])
      .actionPositions(['form-footer'])
      .actionIcon('reply')

    this.action('cancel')
      .actionFloatRight()
      .actionScopes(['index', 'create', 'read', 'update'])
      .actionPositions(['form-footer'])
      .actionIcon('close')

    this.action('refresh')
      .actionFloatRight()
      .actionHidden()
      .actionScopes(['index'])
      .actionIcon('refresh')
      .actionNoMinWidth()

    this.action('save')
      .actionScopes(['create', 'update'])
      .actionPositions(['form-footer'])
      .actionFloatRight()
      .actionIcon('save')
      .actionColor('primary')
      .actionOn('click', function () {
        this.$v.$touch()
        if (this.$v.$error || this.hasErrors) {
          this.$message.error(this.$lang('prototype.actions.save.validation'))
          return
        }
        if (this.debuggers) {
          window.alert(JSON.stringify(this.getRecord()))
        }
        return prototype.save.call(this, this.scope, this.getRecord())
      })

    this.action('view')
      .actionScopes(['index'])
      .actionPositions(['table-top', 'table-cell'])
      .actionIcon('visibility')

    this.action('edit')
      .actionScopes(['index'])
      .actionPositions(['table-top', 'table-cell'])
      .actionColor('primary')
      .actionIcon('edit')

    this.action('destroy')
      .actionScopes(['index'])
      .actionPositions(['table-top', 'table-cell'])
      .actionColor('negative')
      .actionIcon('delete')
  }
}
