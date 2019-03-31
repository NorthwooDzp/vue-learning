export default {
    data() {
        return {
            searchName: '',
            names: [
                'vlad',
                'max',
                'elena',
                'igor'
            ]
        };
    },
    computed: {
        filteredNames() {
            return this.names.filter(item => item.toLowerCase().search(this.searchName.toLowerCase()) !== -1);
        }
    },
}
