// realtime.js

// สร้างฟังก์ชันสำหรับแปลงราคาให้อยู่ในรูปแบบที่ต้องการ
function formatPrice(price) {
    return price.toLocaleString('en-US');
}

// สร้างฟังก์ชันสำหรับดึงข้อมูลและแสดงผล
function fetchAndDisplayGoldPrices() {
    // ใช้ fetch() หรือ XMLHttpRequest เพื่อดึงข้อมูลจาก URL
    fetch('http://27.254.77.78/rest/public/rest/goldspot')
        .then(response => response.json()) // แปลงข้อมูลเป็น JSON
        .then(data => {
            // นำข้อมูลที่ได้มาใส่ในตัวแปร
            const goldG965B = data["G965B"];
            const goldG9999B = data["G9999B"];
            //const goldG9999KG = data["G9999KG"];
           //const goldG9999US = data["G9999US"];

            // แสดงผลข้อมูลในตาราง HTML
            document.getElementById('goldG965BBid').innerText = formatPrice(goldG965B.bid);
            document.getElementById('goldG965BOffer').innerText = formatPrice(goldG965B.offer);
            document.getElementById('goldG9999BBid').innerText = formatPrice(goldG9999B.bid);
            document.getElementById('goldG9999BOffer').innerText = formatPrice(goldG9999B.offer);
        })
        .catch(error => console.error('Error fetching gold prices:', error)); // จัดการข้อผิดพลาด
}
// เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลและแสดงผล
fetchAndDisplayGoldPrices();
// ตั้งเวลารีเฟรชข้อมูลทุก 3 วินาที
setInterval(fetchAndDisplayGoldPrices, 3000);
// สร้างฟังก์ชัน updateDateTime ที่ return updateTime
function updateDateTime() {
    const updateTime = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    const formattedDateTime = new Intl.DateTimeFormat('th-TH', options).format(updateTime);

    // คืนค่า updateTime ถ้าต้องการให้ตัวแปรนี้สามารถใช้งานต่อไป
    return updateTime;
}

// เรียกใช้ฟังก์ชันเพื่ออัปเดตวันที่และเวลาและเก็บค่า updateTime
const updateTime = updateDateTime();

// ใช้ updateTime ในการอัปเดต element บนหน้าเว็บ
const updateTimeElement = document.getElementById('updateTimeElement');
updateTimeElement.textContent = `อัปเดต : ${updateTime.toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} เวลา ${updateTime.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.`;
