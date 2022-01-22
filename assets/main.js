const tt = {
    A: {
        mon: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "OOPJ",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        tue: {
            1: {
                name: "Maths",
            },
            2: {
                name: "Maths",
            },
            3: {
                name: "OOPJ",
            },
            4: {
                name: "LSD",
            },
            5: {
                name: "DS",
            },
            6: {
                name: "OOPJ",
            },
            7: {
                name: "DE",
            }
        },
        wed: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "OOPJ",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        thu: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "OOPJ",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        fri: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "OOPJ",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        sat: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "OOPJ",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
    },
    B: {
        mon: {
            1: {
                name: "OOPJ",
            },
            2: {
                name: "Lab",
            },
            3: {
                name: "Lab",
            },
            4: {
                name: "Lab",
            },
            5: {
                name: "Maths",
            },
            6: {
                name: "LSD",
            },
            7: {
                name: "DS",
            }
        },
        tue: {
            1: {
                name: "DE",
            },
            2: {
                name: "OOPJ",
            },
            3: {
                name: "LSD",
            },
            4: {
                name: "DS",
            },
            5: {
                name: "Maths",
            },
            6: {
                name: "Maths",
            },
            7: {
                name: "PLA",
            }
        },
        wed: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DE",
            },
            3: {
                name: "OOPJ",
            },
            4: {
                name: "DS",
            },
            5: {
                name: "LSD",
            },
            6: {
                name: "OOPJ",
            },
            7: {
                name: "Maths",
            }
        },
        thu: {
            1: {
                name: "LSD",
            },
            2: {
                name: "Maths",
            },
            3: {
                name: "OOPJ",
            },
            4: {
                name: "DS",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        fri: {
            1: {
                name: "OOPJ",
            },
            2: {
                name: "Maths",
            },
            3: {
                name: "DS",
            },
            4: {
                name: "DE",
            },
            5: {
                name: "Maths",
            },
            6: {
                name: "LSD",
            },
            7: {
                name: "DS",
            }
        },
        sat: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "Sust",
            },
            7: {
                name: "Pla",
            }
        }
    }
};
const linktree = {
    A:{
        mat:"mata",
        ds:"dsa",
        lsd:"lsda",
        oopj:"oopja",
        de:"dea",
        sus:"susa",
        plac:"placa"
    },
    B:{
        mat:"https://meet.google.com/wti-xeqq-pey",
        ds:"http://meet.google.com/mqw-dcdw-juo",
        lsd:"https://meet.google.com/awy-dcki-emx",
        oopj:"https://meet.google.com/whv-wzvp-svk",
        de:"https://meet.google.com/qks-doaq-heg",
        sus:"susbhttps://meet.google.com/hqr-kgjf-cou",
        plac:"https://meet.google.com/mvz-soum-ngt"
    },
}
const dd=['mon','mon','tue','wed','thu','fri','sat','mon'];
var div = "A";
var day = "mon";
function set() {
    for (let i = 1; i < 8 ; i++) {
        document.getElementById(`${i}sub`).innerHTML = tt[`${div}`][`${day}`][`${i}`].name; 
   }
}

function getday(d,d1) {
    day = d;
    document.getElementById("day-selector").innerText = d1;
    set();

}

function getdiv(d,d1) {
    div = d;
    document.getElementById("div-selector").innerText = d1;
    set();

}
function link(hr){
    console.log(`${linktree[div][tt[div][day][hr].name]}`  );
}
function main(){
    const date = new Date();
    day = dd[date.getDay()];
    set();
    
}