 function toggleReadMore(element) {
                const currentText =
                    element.parentNode.querySelector(".read-more-text");
                currentText.classList.toggle("read-more-text-show");

                element.textContent = element.textContent.includes("Read More")
                    ? "Read Less"
                    : "Read More";
            }

            // Initial Setup for Read More
            const parentContainers = document.querySelectorAll(".log-entry");

            parentContainers.forEach((container) => {
                container.addEventListener("click", (event) => {
                    const current = event.target;
                    const isReadMoreBtn =
                        current.classList.contains("read-more-btn");

                    if (!isReadMoreBtn) return;

                    toggleReadMore(current);
                });
            });

            // Search Function
            function search() {
                let filter = document
                    .getElementById("find")
                    .value.toUpperCase();
                let items = document.querySelectorAll(".log-entry"); // All articles
                let headers = document.querySelectorAll(".log-entry h2"); // All h2 headings
                let dates = document.querySelectorAll(".log-entry .timestamp"); // All timestamp elements

                for (let i = 0; i < headers.length; i++) {
                    let headerText =
                        headers[i].innerText || headers[i].textContent;
                    let dateText = dates[i].innerText || dates[i].textContent;

                    // Check if either the heading or the date contains the search term
                    if (
                        headerText.toUpperCase().indexOf(filter) > -1 ||
                        dateText.toUpperCase().indexOf(filter) > -1
                    ) {
                        items[i].style.display = "";
                    } else {
                        items[i].style.display = "none";
                    }
                }
            }