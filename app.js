document.getElementById('hirdetes-form').addEventListener('submit', function (esemeny) {
    esemeny.preventDefault();

    const cim = document.getElementById('cim').value;
    const ar = document.getElementById('ar').value;
    const helyszin = document.getElementById('helyszin').value;
    const leiras = document.getElementById('leiras').value;
    const kepURL = document.getElementById('kep').value;

    const ujHirdetes = document.createElement('div');
    ujHirdetes.classList.add('hirdetes');

    let kepHTML = '';
    if (kepURL) {
        kepHTML = `<img src="${encodeURI(kepURL)}" alt="${cim} képe">`;
    }

    ujHirdetes.innerHTML = `
        <h2>${cim}</h2>
        ${kepHTML}
        <p>Ár: ${ar} Ft</p>
        <p>Helyszín: ${helyszin}</p>
        <p>${leiras}</p>
        <button class="erdekel-gomb" onclick="emailKuldes('${cim}', 'Érdeklődő neve', '${helyszin}', 'Érdeklődő telefonszáma')">Érdekel</button>
        <button class="torles-gomb" onclick="torles(this)">Törlés</button>
    `;

    document.getElementById('hirdetesek').appendChild(ujHirdetes);
    document.getElementById('hirdetes-form').reset();
});

function emailKuldes(hirdetesCim, nev, cim, telefon) {
    const email = "maclas871@hengersor.hu";
    const targy = `Érdeklődés: ${hirdetesCim}`;
    const uzenet = `Név: ${nev}\nCím: ${cim}\nTelefon: ${telefon}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(targy)}&body=${encodeURIComponent(uzenet)}`;
}

function torles(gomb) {
    const hirdetes = gomb.parentElement;
    hirdetes.remove();
}
