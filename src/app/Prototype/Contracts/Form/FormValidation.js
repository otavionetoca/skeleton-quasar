import { parseValidations } from 'src/app/Prototype/Contracts/Helper/validation'

/**
 * @mixin {FormValidation}
 */
export default {
  /**
   */
  validations () {
    const record = Object.keys(this.components).reduce(this.reduceValidations, {})
    return { record }
  },
  /**
   */
  methods: {
    /**
     * @param {Object} accumulator
     * @param {string} key
     * @returns {*}
     */
    reduceValidations (accumulator, key) {
      if (!Object.keys(this.components[key].$validations).length) {
        return accumulator
      }

      accumulator[key] = parseValidations(this.components[key].$validations)
      return accumulator
    }
  },
  /**
   */
  watch: {
    /**
     * @param {Boolean} status
     * @param {Boolean} previous
     */
    '$v.$invalid' (status, previous) {
      if (!this.buttons) {
        return
      }
      Object.keys(this.buttons).forEach((key) => {
        if (!this.buttons[key].validate) {
          return
        }
        if (typeof this.buttons[key].validate !== 'function') {
          return
        }
        this.buttons[key].validate.call(this, this.buttons[key], !status)
      })
    }
  }
}
