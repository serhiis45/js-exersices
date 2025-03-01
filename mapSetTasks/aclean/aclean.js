function aclean(arr) {
    let map = new Map();
    
    arr.forEach((value) => {
        let sorted = value
            .toLowerCase()
            .split('')
            .sort()
            .join('');
            
        map.set(sorted, value);
    });

    return Array.from(map.values());
}


module.exports = aclean;
