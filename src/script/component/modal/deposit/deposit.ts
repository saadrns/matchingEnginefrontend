// Copyright 2019 GitBitEx.com
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import { Dom, Component, Prop, Watch, Emit } from "./../../component";

@Dom('modal-deposit', require('./deposit.jade')())
export class DepositModalComponent extends Component {

    @Prop()
    data: any;

    address: string = '';
    tabbarItems: any[] = [];
    currency: string;

    @Emit('close')
    close() {}

    created() {

        this.data.currencies.forEach((currency: string) => {
            this.tabbarItems.push({
                currency: currency,
                active: false
            });
        });

        this.tabbarChange(0);

    }

    mounted() {
        super.mounted();
    }

    tabbarChange(index: number) {
        this.tabbarItems.forEach((item: any, i: number) => {
            item.active = i == index;
        })
        this.currency = this.tabbarItems[index].currency;
    }

}