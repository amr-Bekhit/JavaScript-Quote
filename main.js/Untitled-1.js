var arrayQuotes =  [
        {'demo': 'So many books, so little time.', 
         'demo1': 'Frank Zappa'
        },
        {'demo': 'A room without books is like a body without a soul.', 
         'demo1': 'Marcus Tullius Cicero'
        },
        {'demo': 'You only live once, but if you do it right, once is enough.', 
         'demo1': 'Mae West'
        },
        {'demo': 'Be the change that you wish to see in the world.', 
         'demo1': 'Mahatma Gandhi'
        },
        {'demo': 'If you tell the truth, you don t have to remember anything.', 
         'demo1': 'Mark Twain'
        },
        {'demo': 'Do not take life too seriously. You will not get out alive.', 
         'demo1': 'Elbert Hubbard'
        },
        {'demo': 'A friend is someone who knows all about you and still loves you.', 
         'demo1': 'Elbert Hubbard'
        },
    ];
    
    
    function Quote(){
        var ay7aga = Math.floor(Math.random()*arrayQuotes.length + 1 );
        document.getElementById("demo").innerHTML = `${arrayQuotes[ay7aga]["demo"]}`
        document.getElementById("demo1").innerHTML = `${arrayQuotes[ay7aga]["demo1"]}`
        
    }