export default class ValidationsHelper{
    isANumber = (test) => 
    {
        return !isNaN(test);
    }

    fullLetters(s) {
        const regex = /^[a-zA-Z\s]+$/;;
        return regex.test(s);
    }

    latitudeLongitude(la, lo) {
        const latRegex = /^-?([1-8]?\d(\.\d{1,15})?|90(\.0{1,15})?)$/;
        const lonRegex = /^-?((1[0-7]|[1-9])?\d(\.\d{1,15})?|180(\.0{1,15})?)$/;        
        return latRegex.test(la) && lonRegex.test(lo); 
    }
}