document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', toggleAccordion);
            header.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleAccordion.call(header);
                }
            });

        // Optional: start collapsed
            const content = header.nextElementSibling;
            content.style.maxHeight = '0';
            content.setAttribute('aria-hidden', 'true');
        });

        function toggleAccordion() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const content = this.nextElementSibling;

            this.setAttribute('aria-expanded', String(!isExpanded));
            content.setAttribute('aria-hidden', String(isExpanded));

            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        }