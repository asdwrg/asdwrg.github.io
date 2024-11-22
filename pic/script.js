async function fetchRandomImage() {
    try {
        // 获取图片 URL 列表
        const response = await fetch('images.txt');
        const text = await response.text();
        const images = text.split('\n').filter(url => url.trim() !== '');

        // 随机选择一个 URL
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImageUrl = images[randomIndex];

        // 设置图片的 src
        const imageElement = document.getElementById('random-image');
        imageElement.src = randomImageUrl;
    } catch (error) {
        console.error('Error fetching random image:', error);
    }
}

// 页面加载时调用
fetchRandomImage();
