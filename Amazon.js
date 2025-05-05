  // counter
  let count = 0
  const counts = document.querySelector('.count').innerHTML = `${count}`;


        function counterP() {
            const counts = document.querySelector('.count').innerHTML = `${count}`;
        }

      function increment() {    
        counterP();

        const increase = document.getElementById('add');

        count++;
        counts.innerHTML = `${count}`;

        if (increase > 0) {
            count++;
        }
        
      }

      function decrement() {
        counterP();

        const subButton = document.getElementById('subtract');

        count--;
        counts.innerHTML = `${count}`;
      }

      function resetBtn() {
          counterP();
          count = 0;
          counts.innerHTML =`${count = 0}`
      }

      let color = '';
        if (count > 0) {
            color = 'green';
        } 
        else if (count < 0) {
            color = 'red';
        }
        else {
            color = 'blue';
        }

   // amazon calculator
   function handleKeydown(event) {
       if (event.key === 'Enter') {
           calculateTotal();
       }
   }

   function calculateTotal() {
       const inputElement = document.querySelector('.js-cost-input');

       let cost = Number(inputElement.value);

       if (cost < 40) {
           cost += 10;
       }

       document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
   }