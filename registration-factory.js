function registrationNumbers(regNum){
    var regTown = regNum || [];
    var plateNum;
    var regSource = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/i;

    function regInput(){
        var regNumber = num;
        var regUpperCase = num.toUpperCase().trim();
        var regTest = regSource.test(regUpperCase);

        if(regUpperCase.startsWith('CF') || regUpperCase.startsWith('CY') || regUpperCase.startsWith('CL') || regUpperCase.startsWith('CA')){
            if(regTown.includes(regUpperCase) === false){
                regTown.push(regUpperCase);
            }       
            else if(regTown.includes(regUpperCase === true){
                return('Has already been added!');
            }
        }
        else {
            return('Registration number is not valid')
        }
    }

    function getRegNum(){
        return regTown;
    }

    function regNumFilter(regFilter){
        var townFilter = [];
        if(regFilter === undefined || regFilter === ''){
            return regTown.push(regTown[i]);
        }
        for (var i=0;i<regTown.length;i++){
            if(regTown[i].startsWith(regFilter)){
                townFilter.push(regTown[i]);
            }
        }
        return townFilter
    }

    function duplicateReg(plate){
        return regTown.includes(plate.toUpperCase())
    }

    function regCheck(){
        var check = [];
        check = ['CY 148675', 'CF 762108'];
        return check;
    }

    function regSearch(plate){
        return regSource.test(plate)
    }

    return{
        regInput,
        getRegNum,
        regNumFilter,
        duplicateReg,
        regCheck,
        regSearch
    }
}