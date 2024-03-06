this.contentsElement.addEventListener("wheel", (e) => {
			var left;

			if(e.deltaX){
				left = this.contentsElement.scrollLeft + e.deltaX;//yea

				this.table.rowManager.scrollHorizontal(left);
				this.table.columnManager.scrollHorizontal(left);
			}
		});
	}
	
		if(data && data.length){//good
			
			row = data[0];
			
			for(var key in row){
				let col = {
					field:key,
					title:key,
				};
				
				let value = row[key];
				
				switch(typeof value){
					case "undefined":
						sorter = "string";
						break;
var column = new Column(definition, this),
		colEl = column.getElement(),
		index = nextToColumn ? this.findColumnIndex(nextToColumn) : nextToColumn;
		
		if(nextToColumn && index > -1){
			var topColumn = nextToColumn.getTopColumn();
			var parentIndex = this.columns.indexOf(topColumn);
			var nextEl = topColumn.getElement();
