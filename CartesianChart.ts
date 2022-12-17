SfCartesianChart(
            title: ChartTitle(text: 'Flutter Chart'),
            legend: Legend(isVisible: true),
            series: <ColumnSeries<Data, num>>[
              ColumnSeries<String, num>(
                  dataSource: data,
                  xValueMapper: (Data, _) => data.Fehlstellung,
                  yValueMapper: (Data, _) => data.Wiederholung,
                  dataLabelSettings: const DataLabelSettings(isVisible: true)
              ),
            ],
            tooltipBehavior: TooltipBehavior( enable: true),
          )