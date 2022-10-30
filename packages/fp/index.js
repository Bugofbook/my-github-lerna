function compose(...fns) {
    return fns.reduce((f, g) => (arg) => f(g(arg)));
}
function pipe(...fns) {
    return fns.reduce((f, g) => (arg) => g(f(arg)));
}

module.exports = {
    compose,
    pipe,
}