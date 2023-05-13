const dataURL = "js/faq.xml";

function loadXML() {
    // Создаем объект XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    // Открываем файл, указывая его имя и путь, и устанавливаем параметр async в false
    xhttp.open("GET", dataURL, false);

    // Устанавливаем заголовок, чтобы браузер понимал, что мы ожидаем XML данные
    xhttp.setRequestHeader("Content-type", "text/xml");

    // Отправляем запрос на сервер
    xhttp.send();

    let xmlDoc = '';
    // Проверяем, что запрос завершен и ответ получен успешно
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        // Получаем XML данные в переменной xmlDoc
        xmlDoc = xhttp.responseXML;
    }

    // Получаем список элементов <question>
    const questions = xmlDoc.getElementsByTagName('question');

    // Создаем HTML-код из содержимого XML-файла
    let faqHtml = '';
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const text = question.getElementsByTagName('text')[0].textContent;
        const answer = question.getElementsByTagName('answer')[0].textContent;
        faqHtml += `<div class="faq"><strong>Вопрос:</strong> ${text}<br/><strong>Ответ:</strong> ${answer}</div>`;
    }
    const faqDiv = document.getElementById('faqs');
    // Добавляем HTML-код в <div id=faq></div>
    faqDiv.innerHTML = faqHtml;
}

loadXML();