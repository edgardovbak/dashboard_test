import { observable, makeObservable, computed } from "mobx"

export class DashboardStore {
    id = Math.random()
    title = ""

    get dashboardTitle() {
        return this.title
    }

    constructor(title) {
        makeObservable(this, {
            title: observable,
            dashboardTitle: computed
        })
        this.title = title
    }

}

