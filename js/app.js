// const dataArr = []

// const getData = async (url) => {
//   const getData = await fetch(url)
//   dataArr = await getData.json()
//   return dataArr
// }

// getData('https://www.random.org/integers/?num=35&min=6&max=52&col=2&base=10&format=plain&rnd=yes').then(item => {
//   console.log(item)
// })

console.log(
  fetch('https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=html&rnd=new')
    .then(response => response.json())
    .then(data => console.log(data))
)