import React, { Component } from 'react';

class StandardSection extends Component {
    render() {
        return (
            <section id="s2-searchbar">
                <div class="container">
                    <div class="row justify-content-md-center s2-search-padding">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <label class="sr-only" for="inlineFormInputGroupUsername2">{"Name will come here"}</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Product Name" />
                                <button type="submit" class="btn btn-primary mb-2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StandardSection