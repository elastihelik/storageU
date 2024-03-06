this.contentsElement.addEventListener("wheel", (e) => {
			var left;

			if(e.deltaX){
				left = this.contentsElement.scrollLeft + e.deltaX;

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
