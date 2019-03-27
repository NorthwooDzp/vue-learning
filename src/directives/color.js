export default {

    bind(element, bindings, vnode) {
        console.log('bind');

        const arg = bindings.arg;
        // element.style.color = 'gold';
        element.style[arg] = bindings.value;

        const fongModifier = bindings.modifiers['font'];
        if (fongModifier) {

            element.style.fontSize = '36px';
        }

        const delayModifier = bindings.modifiers['delay'];
        if (delayModifier) {
            const to = setTimeout(() => {
                element.style.color = 'blue';
                clearTimeout(to)
            }, 2000);
        }
    },

    inserted(element, bindings, vnode) {
        console.log('inserted');
    },

    update(element, bindings, vnode, oldVnode) {
        console.log('update');
    },

    componentUpdated(element, bindings, vnode, oldVnode) {
        console.log('component updated');
    },

    unbind(element, bindings, vnode) {
        console.log('unbind');
    }

};
