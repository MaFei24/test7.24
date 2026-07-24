(function(){
  const screen = document.getElementById('screen');
  let current = '';

  function updateScreen(text){
    screen.textContent = text || '0';
  }

  function append(char){
    if(current === '' && char === '.') {
      current = '0.';
    } else {
      current += char;
    }
    updateScreen(current);
  }

  function clearAll(){ current = ''; updateScreen('0'); }
  function backspace(){ current = current.slice(0,-1); updateScreen(current || '0'); }

  function sanitizeExpression(expr){
    // allow digits, operators . and parentheses
    return expr.replace(/[^0-9+\-*/().%]/g, '');
  }

  function compute(){
    if(!current) return;
    const expr = sanitizeExpression(current.replace(/×/g,'*').replace(/÷/g,'/'));
    try{
      // handle percent: convert n% to (n/100)
      const replaced = expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
      const result = Function('return ' + replaced)();
      current = String(result);
      updateScreen(current);
    }catch(e){
      updateScreen('Error');
      current = '';
    }
  }

  document.querySelector('.keys').addEventListener('click', e=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    const action = btn.dataset.action;
    if(!isNaN(action)){
      append(action);
      return;
    }
    if(action === '.') { append('.'); return; }
    if(action === 'clear'){ clearAll(); return; }
    if(action === 'back'){ backspace(); return; }
    if(action === 'equals'){ compute(); return; }
    if(action === 'percent'){ append('%'); return; }
    // operators
    if(['+','-','*','/'].includes(action)){
      // prevent two consecutive operators
      if(current === '' && action === '-'){
        append('-');
        return;
      }
      if(/[+\-*/%]$/.test(current)){
        current = current.slice(0,-1) + action;
      } else {
        append(action);
      }
    }
  });

  // keyboard support
  window.addEventListener('keydown', e=>{
    const key = e.key;
    if((/^[0-9]$/).test(key)) { append(key); e.preventDefault(); return; }
    if(key === '.') { append('.'); e.preventDefault(); return; }
    if(key === 'Enter' || key === '='){ compute(); e.preventDefault(); return; }
    if(key === 'Backspace'){ backspace(); e.preventDefault(); return; }
    if(key === 'Escape'){ clearAll(); e.preventDefault(); return; }
    if(['+','-','*','/'].includes(key)) { append(key); e.preventDefault(); return; }
    if(key === '%'){ append('%'); e.preventDefault(); return; }
  });

  // initialize
  updateScreen('0');
})();
