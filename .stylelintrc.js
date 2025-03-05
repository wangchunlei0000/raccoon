module.exports = {
  extends: ['@filez/stylelint-plugin-pattern/main_standard'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
}
