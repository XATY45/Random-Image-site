let button = document.getElementById('generateBtn');
let gridContainer = document.getElementById('gridContainer');

button.addEventListener('click', () => {
    if (gridContainer.childElementCount >= 30) {
        let isDelete = confirm('이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?');
        if (isDelete) {
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
        }
    } else {
        let img = document.createElement('img');
        img.src = 'https://picsum.photos/200/300?random=' + Math.random();
        gridContainer.appendChild(img);

        // 이미지에 클릭 이벤트 리스너 추가
        img.addEventListener('click', () => {
            gridContainer.removeChild(img);
        });
    }

    console.log('이미지 만들기 버튼이 클릭되었습니다.');
});