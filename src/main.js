import './style.css'

// **---Pull in License JSON---**
let licenseData = null;
let mainContainer = document.getElementById("mainContainer")
async function loadLicenseData() {
  try {
    const response = await import('./licenses.json');
    
    licenseData = response.default;
    
    console.log("Data loaded successfully!", licenseData);
    
    initializeApp();
    
  } catch (error) {
    console.error("Failed to load license data:", error);
  }
}

function initializeApp() {
  console.log("Initialization Started")
  mainContainer.innerHTML = "";
licenseData.meta.licenseTypes.forEach(type => {
  const matchingCategories = licenseData.categories.filter(cat => cat.licenseTypeId === type.licenseTypeId);
  const categoryCount = matchingCategories.length;
  const cardHTML = `
    <div class="bg-slate-700 border border-yellow-400 rounded-lg w-1/6 p-6 flex flex-col items-center gap-3 hover:scale-102 hover:ease-in-out">
      <h3 class="text-xl text-center font-bold">${type.name}</h3>
      <p class="text-lg font-semibold">${categoryCount} Categories</p>
      <p class="text-lg font-semibold">Licenses count here</p>
    </div>
  `;
  mainContainer.innerHTML += cardHTML;
});
}
loadLicenseData();

// **---Menu DropDown---**
const menuBtn = document.getElementById("menu-btn")
const menuDropDown = document.getElementById("menuDropDown")
menuBtn.addEventListener("click", () => {
  menuDropDown.classList.toggle("hidden")
})
const tlCard = document.getElementById("tlCard")
const blCard = document.getElementById("blCard")
tlCard.addEventListener("click", renderTradeLicenses)
function renderTradeLicenses() {

}
blCard.addEventListener("click", renderBusinessLicenses)
