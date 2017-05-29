import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import RunViewFactory from '../RunViewFactory.js'
import BenchmarkCollection from '../../models/BenchmarkCollection.js'
import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'

import SingleRunCollectionView from './SingleRunCollectionView.jsx'

export default class SingleRunViewFactory extends RunViewFactory {

    constructor(options) {
        super();
        this.moreThenOneBenchmarkRun = options.moreThenOneBenchmarkRun;
        this.unselectBenchmarkFunction = options.unselectBenchmarkFunction;
        this.selectBenchmarkCollectionFunction = options.selectBenchmarkCollectionFunction;
    }

    unselectRun() {
        this.unselectBenchmarkFunction();
    }

    createTopSection(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricType) {
        return <div>
                 <Badge>
                   { benchmarkCollection.length }
                 </Badge> different benchmark classes for single run '
                 { runSelection.names[0] }' and metric '
                 { metricType }' detected!
                 { " " }
                 { this.moreThenOneBenchmarkRun ? <a onClick={ this.unselectRun.bind(this) }>(Unselect)</a> : "" }
               </div>
    }

    createCollectionView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {
        return <SingleRunCollectionView
                                        benchmarkCollection={ benchmarkCollection }
                                        runSelection={ runSelection }
                                        metricExtractor={ metricExtractor }
                                        selectBenchmarkCollectionFunction={ this.selectBenchmarkCollectionFunction } />
    }

}