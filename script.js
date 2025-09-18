// 获取显示时间的元素
const dockTimer = document.getElementById('dock-timer');

// 记录页面加载时间
const startTime = new Date();

// 更新计时器
function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // 秒

    const days = Math.floor(elapsedTime / (24 * 60 * 60));
    const hours = Math.floor((elapsedTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((elapsedTime % (60 * 60)) / 60);
    const seconds = elapsedTime % 60;

    // 格式化输出
    dockTimer.textContent = `${days}天${hours}小时${minutes}分${seconds}秒`;
}

// 每秒更新一次计时器
setInterval(updateTimer, 1000);

// 页面加载后立即调用一次，避免延迟
updateTimer();