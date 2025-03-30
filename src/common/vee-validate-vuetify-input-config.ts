/**
 * configuration object for `defineField` method of `vee-validate` to proper use `vuetify` input components with `vee-validate`
 *
 * @see https://vee-validate.logaretm.com/v4/examples/ui-libraries/
 */
export const vuetifyInputConfig = (state: { errors: string[] }) => ({
  validateOnModelUpdate: false,
  props: {
    "error-messages": state.errors,
  },
});
