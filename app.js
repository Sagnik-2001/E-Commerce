// Search functionality for the sale items
const searchInput = document.getElementById('searchInput');
const saleItems = document.querySelectorAll('.sale_item');

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase(); // Convert search input to lowercase for case-insensitive matching
    
    saleItems.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase(); // Get the item's data-name attribute and make it lowercase
        if (itemName.includes(searchValue)) {
            item.style.display = 'block'; // Show item if the search query matches
        } else {
            item.style.display = 'none'; // Hide item if the search query doesn't match
        }
    });
});

// // Toggle dropdown on click
// document.querySelector('.dropdown-btn').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default link behavior
//     const dropdownContent = this.nextElementSibling;
//     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
// });

// // Close the dropdown if the user clicks outside of it
// window.addEventListener('click', function (e) {
//     if (!e.target.matches('.dropdown-btn')) {
//         document.querySelectorAll('.dropdown-content').forEach(dropdown => {
//             dropdown.style.display = 'none';
//         });
//     }
// });
