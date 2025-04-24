function fetchData(item) {
  item[2] = new Date()
  return new Promise((resolve) => {
    setTimeout(() => {
      item[3] = new Date()
      resolve(item)
    }, Math.random() * 2000)
  })
}

async function concurrentLimit(array, limit) {
  const results = []
  const executors = new Set()

  for (const item of array) {
    const promise = Promise.resolve().then(() => fetchData(item))

    results.push(promise)
    executors.add(promise)

    if (executors.size >= limit) {
      await Promise.race(executors)
    }

    promise.finally(() => {
      executors.delete(promise)
      self.postMessage({ type: 'progress', progress: results.length })
    })
  }

  return Promise.allSettled(results)
}

self.onmessage = async (event) => {
  const { array, limit } = event.data

  const results = await concurrentLimit(array, limit)

  self.postMessage({ type: 'result', results })
}
