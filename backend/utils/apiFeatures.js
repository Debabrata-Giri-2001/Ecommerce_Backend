class Applications {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    searchData() {
        const keyword = this.queryStr.keyword ?
            {
                $or: [
                    { name: { $regex: this.queryStr.keyword, $options: 'i' } },
                    { description: { $regex: this.queryStr.keyword, $options: 'i' } },
                    { category: { $regex: this.queryStr.keyword, $options: 'i' } }
                ]
            }
            : {};
        this.query = this.query.find({ ...keyword })
        return this;
    }

    filterData() {
        const queryCopy = { ...this.queryStr };
        // remove some fields for category
        const removeField = ["keyword", "page", "limit"]
        removeField.forEach(key => delete queryCopy[key])
        //filter for price range

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}

module.exports = Applications;