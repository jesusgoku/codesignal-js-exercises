/**
 * @author Jesús Urrutia <jesus.urrutia@gmail.com>
 *
 * https://app.codesignal.com/interview-practice/task/3PcnSKuRkqzp8F6BN
 */

export default areFollowingPatterns;

function areFollowingPatterns(strings, patterns) {
    const regStr = new Map();
    const regPtr = new Map();

    for (let index = 0; index < strings.length; index++) {
        const str = strings[index];
        const ptr = patterns[index];

        if ((regPtr.has(ptr) || regStr.has(str))
            && (regPtr.get(ptr) !== str || regStr.get(str) !== ptr)) {
            return false;
        }

        regPtr.set(ptr, str);
        regStr.set(str, ptr);
    }

    return true;
}
