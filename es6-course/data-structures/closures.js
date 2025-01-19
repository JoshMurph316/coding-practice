let call = () => {
        let secret = "baby driver";
        let reveal = () => {
            console.log(secret);
        }
        reveal();
    }
    //  console.log(secret); wont work outside scope
call();
//**********************/
let fall = () => {
        let pain = '75%';
        let show = () => {
            console.log(pain);
        }
        return show;
    }
    //  console.log(pain); wont work outside scope
let unwrap = fall();
unwrap();

// push test