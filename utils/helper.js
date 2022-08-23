export const TEACHER_ROLE = process.env.NEXT_PUBLIC_TEACHER_ROLE_ID;

export const PARENT_ROLE = process.env.NEXT_PUBLIC_PARENT_ROLE_ID;
export const STUDENT_ROLE = process.env.NEXT_PUBLIC_STUDENT_ROLE_ID;
export const SCHOOL_ROLE = process.env.NEXT_PUBLIC_SCHOOL_ROLE_ID;

export const FIRST_TERM = process.env.NEXT_PUBLIC_FIRST_TERM_ID;
export const SECOND_TERM = process.env.NEXT_PUBLIC_SECOND_TERM_ID;
export const THIRD_TERM = process.env.NEXT_PUBLIC_THIRD_TERM_ID;

export const TERMS = [
    { key: 'firstTerm', label: 'First Term', _id: FIRST_TERM, id: FIRST_TERM },
    { key: 'secondTerm', label: 'Second Term', _id: SECOND_TERM, id: SECOND_TERM },
    { key: 'thirdTerm', label: 'Third Term', _id: THIRD_TERM, id: THIRD_TERM },
];

export const isTeacher = (role) => {
    if (role === TEACHER_ROLE) return true;
    return false;
};

export const isSchool = (role) => {
    if (role === SCHOOL_ROLE) return true;
    return false;
};

export const isStudent = (role) => {
    if (role === STUDENT_ROLE) return true;
    return false;
};

export const isParent = (role) => {
    if (role === PARENT_ROLE) return true;
    return false;
};

export const checkRoles = (role) => {
    if (isParent(role)) return 'Parent';
    if (isTeacher(role)) return 'Teacher';
    return 'Student';
};

export const convertMinutesToMilliseconds = (number) => {
    if (!number) return 0;
    return number * 1000;
};


export const capitalizeFirstLetter = (string) => {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export function toProperCase(str) {
    if (!str) return;
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export const isEmpty = (obj) => {
    if (!obj) return false;
    if (!Object.keys(obj).length) {
        return true;
    } else {
        return false;
    }
};

export const getRemarks = (performance, numOftests = 0) => {
    if (!performance && numOftests > 0) return 'Below Average';
    if (!performance || performance === 0) return 'No rating yet';

    if (performance < 50) {
        return 'Below Average';
    } else if (performance < 70) {
        return 'Average';
    } else {
        return 'Excelling';
    }
};

export const decodeEntities = (function () {
    /**
     *  @desc
     * parse and remove HTML tags  from a text.
     * useful for lesson contents and transcripts
     * */

    // this prevents any overhead from creating the object each time
    function decodeHTMLEntities(str) {
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
            str = str.replace(/&nbsp;| .&nbsp; /gim, '');
            str = str.replace(/&rsquo;/gim, "'");
        }
        return str;
    }
    return decodeHTMLEntities || 'Nothing to read';
})();

export const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const makeDoubleDigit = (num) => {
    if (!num) return '00';

    const _num = num.toString();
    if (_num.length >= 2) {
        return _num;
    }

    return '0' + _num;
};

export const cutString = (data ='', limit = 40) => {
    if(!data || data.length<limit) return data;
    return data.substr(0, limit - 3)+'...'    
};

export const Sleep = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

export const numberWithCommas = (x) => {
    if(!x) return x
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}