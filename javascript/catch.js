async function fetchData() {
  const response = await fetch('https://api.example.com/data').catch(error => {
    console.error('Request failed: ', error)
    return null // 返回兜底值
  })
  if (!response) return
  // 继续处理 response...
}
