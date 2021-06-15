class Request {
    constructor({ req }) {
        return {
            get: this.get.bind({ req }),
            tree: this.tree.bind({ req })
        };
    }
    tree() {
        const path = this.req.params[0].slice(1);
        const tree = path.split("/");
        return {
            path,
            tree
        };
    }
    get(query = null) {
        return query === null ? this.req.query : this.req.query[query];
    }
}


class api {
    constructor(req, res) {
        return {
            api: {
                r: new Request({ req: req }),
                u: () => {}
            }
        }
    }
}

module.exports = api;