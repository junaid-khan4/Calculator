const output = document.querySelector(".output input");
const btn = document.querySelectorAll("button");

btn.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.textContent;


        if (!isNaN(buttonText)) {
            output.value += buttonText;
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            const lastChar = output.value.slice(-1);
            if (!['+', '-', '*', '/'].includes(lastChar)) {
                output.value += buttonText;
            }
        }
        
        else if (buttonText === '=') {
            try {
                let result = eval(output.value);
                result = result.toString(); 
                if (result.length > 15) {
                    result = result.slice(0, 15); 
                }
                output.value = result;
            } catch (error) {
                output.value = 'Error';
            }
        }
        else if (buttonText === 'C') {
            output.value = '';
        }
    });
});
