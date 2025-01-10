document.getElementById("calculForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const abeilles = parseInt(document.getElementById("abeilles").value);
    const boost = parseInt(document.getElementById("boost").value) / 100;
    const zone = parseFloat(document.getElementById("zone").value);

    const mielEstimé = abeilles * (1 + boost) * zone;
    document.getElementById("resultat").innerText = `Vous pouvez récolter environ ${mielEstimé.toFixed(2)} unités de miel.`;
});
