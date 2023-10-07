function deepMerge(target: any, source: any): object {
  const output = { ...target }

  for (const key in source) {
    if (source[key] instanceof Object && output[key]) {
      output[key] = deepMerge(output[key], source[key])
    } else {
      output[key] = source[key]
    }
  }

  return output
}

export function mergeConfig(defaults: object, userConfig: object): object {
  return deepMerge({ ...defaults }, userConfig)
}
