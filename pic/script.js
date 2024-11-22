async function fetchRandomImage() {
    try {
        // 获取 TXT 文件内容
        const response = await fetch('images.txt');
        const text = await response.text();

        // 将文件内容按行分割，并过滤掉空行和多余空格
        const images = text.split('\n').map(line => line.trim()).filter(url => url);

        // 检查是否有可用的图片链接
        if (images.length === 0) {
            throw new Error('No valid image URLs found in the file.');
        }

        // 随机选择一个图片链接
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImageUrl = images[randomIndex];

        // 更新图片
        const imageElement = document.getElementById('random-image');
        imageElement.src = randomImageUrl;
    } catch (error) {
        console.error('Error fetching random image:', error);
    }
}

// 页面加载时调用
fetchRandomImage();
