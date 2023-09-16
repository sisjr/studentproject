document.addEventListener("DOMContentLoaded", function () {
    const periodicTable = document.getElementById("periodic");
    const popup = document.getElementById("element-popup");
    const elementName = document.getElementById("element-name");
    const elementInfo = document.getElementById("element-info");

    // Function to open the pop-up window
    function openPopup(elementData) {
        elementName.textContent = elementData.getAttribute("title");
        elementInfo.textContent = `Symbol: ${elementData.id}\nAtomic Number: ${elementData.textContent}`;
        popup.style.display = "block";
    }

    // Function to close the pop-up window
    function closePopup() {
        popup.style.display = "none";
    }

    // Event listeners for all elements in the periodic table
    const elements = periodicTable.querySelectorAll("td[title]");
    elements.forEach(function (element) {
        element.addEventListener("click", function () {
            openPopup(element);
        });
    });

    // Attach closePopup function to the close button
    document.querySelector(".close-popup").addEventListener("click", closePopup);
});
