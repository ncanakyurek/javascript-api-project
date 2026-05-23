// HTML'deki users butonunu seç
const userbutton = document.getElementById('load-users');

// HTML'deki todos butonunu seç
const todoButton = document.getElementById('load-todos');
// USERS API
// Users butonuna tıklanınca çalışır
userbutton.addEventListener('click', () => {

    // Todos listesini temizle
    document.querySelector('#todos-list').innerHTML = '';

    // Users API'ye istek gönder
    fetch('https://jsonplaceholder.typicode.com/users')

    // Gelen cevabı JSON formatına çevir
    .then(response => response.json())

    // JSON verisi geldikten sonra çalış
    .then(users => {

        // HTML'deki users listesini seç
        const ul = document.querySelector('#users-list');

        // Listeyi temizle
        // Böylece her tıklamada tekrar tekrar eklenmez
        ul.innerHTML = '';

        // Users arrayini dön
        users.forEach(user => {

            // Yeni bir li elementi oluştur
            const li = document.createElement('li');

            // Kullanıcının adını li içine yaz
            li.textContent = user.name;

            // li elementini ul içine ekle
            ul.appendChild(li);

        });

    })

    // Eğer hata olursa console'a yazdır
    .catch(error => console.error('Error fetching users:', error));

});


// TODOS API
// Todo butonuna tıklanınca çalışır
todoButton.addEventListener('click', () => {

    // Users listesini temizle
    document.querySelector('#users-list').innerHTML = '';

    // Todos API'ye istek gönder
    fetch('https://jsonplaceholder.typicode.com/todos/1')

    // Gelen cevabı JSON formatına çevir
    .then(response => response.json())

    // JSON verisi geldikten sonra çalış
    .then(todo => {

        // HTML'deki todo listesini seç
        const ul = document.querySelector('#todos-list');

        // Listeyi temizle
        ul.innerHTML = '';

        // Yeni bir li elementi oluştur
        const li = document.createElement('li');

        // Todo başlığını li içine yaz
        li.textContent = todo.title;

        // li elementini ul içine ekle
        ul.appendChild(li);

    })

    // Eğer hata olursa console'a yazdır
    .catch(error => console.error('Error fetching todos:', error));

});


