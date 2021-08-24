const sceneEl = document.querySelector("a-scene")
const heartEl = document.querySelector("#heart-model")
const scoreEl = document.querySelector('#score-element')

// ランダム位置を生成
function randomPosition() {
  return {
    x: (Math.random() - 0.5) * 20,
    y: 1.5,
    z: (Math.random() - 0.5) * 20
  };
}

// スコア
let score = 0

// スコア表示
function displayScore() {
  scoreEl.setAttribute('value', `Score: ${score}`);
}

// ハート生成
function createHeart(){
  const clone = heartEl.cloneNode()
  clone.setAttribute("position", randomPosition())
  clone.addEventListener('mousedown', () => {
    score++
    clone.dispatchEvent(new Event('collected'));
    displayScore()
  })
  clone.addEventListener('animationcomplete', () => {
    clone.setAttribute("position", randomPosition())
    clone.setAttribute('scale', '0.01 0.01 0.01')
  });
  sceneEl.appendChild(clone)
}

// 最初に15個のハートを生成する
for (let i=0 ; i<15; i++) {
  createHeart()
}

// スコア表示
displayScore()
