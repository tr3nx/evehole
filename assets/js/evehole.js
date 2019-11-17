window.bus = new Vue();

var whMap = {
	'Z060' : { type : 'Null', lifetime : 16 },
	'Z142' : { type : 'Null', lifetime : 16 },
	'C248' : { type : 'Null', lifetime : 16 },
	'E545' : { type : 'Null', lifetime : 16 },
	'E587' : { type : 'Null', lifetime : 16 },
	'K329' : { type : 'Null', lifetime : 16 },
	'K346' : { type : 'Null', lifetime : 16 },
	'Q003' : { type : 'Null', lifetime : 16 },
	'S199' : { type : 'Null', lifetime : 16 },
	'V283' : { type : 'Null', lifetime : 16 },
	'A982' : { type : 'C6', lifetime : 24 },
	'B041' : { type : 'C6', lifetime : 48 },
	'G008' : { type : 'C6', lifetime : 16 },
	'R474' : { type : 'C6', lifetime : 24 },
	'S804' : { type : 'C6', lifetime : 24 },
	'U319' : { type : 'C6', lifetime : 48 },
	'U574' : { type : 'C6', lifetime : 24 },
	'V753' : { type : 'C6', lifetime : 24 },
	'W237' : { type : 'C6', lifetime : 24 },
	'B735' : { type : 'Barbican', lifetime : 16 },
	'R259' : { type : 'Redoubt', lifetime : 16 },
	'S877' : { type : 'Sentinel', lifetime : 16 },
	'V928' : { type : 'Vidette', lifetime : 16 },
	'C414' : { type : 'Conflux', lifetime : 16 },
	'A641' : { type : 'Highsec', lifetime : 16 },
	'B274' : { type : 'Highsec', lifetime : 24 },
	'Q063' : { type : 'Highsec', lifetime : 16 },
	'S047' : { type : 'Highsec', lifetime : 24 },
	'B449' : { type : 'Highsec', lifetime : 16 },
	'B520' : { type : 'Highsec', lifetime : 48 },
	'D792' : { type : 'Highsec', lifetime : 24 },
	'N110' : { type : 'Highsec', lifetime : 24 },
	'D845' : { type : 'Highsec', lifetime : 24 },
	'A009' : { type : 'C13', lifetime : 16 },
	'C125' : { type : 'C2', lifetime : 16 },
	'C247' : { type : 'C3', lifetime : 16 },
	'D364' : { type : 'C2', lifetime : 16 },
	'D382' : { type : 'C2', lifetime : 16 },
	'E004' : { type : 'C1', lifetime : 16 },
	'G024' : { type : 'C2', lifetime : 16 },
	'H121' : { type : 'C1', lifetime : 16 },
	'I182' : { type : 'C2', lifetime : 16 },
	'L005' : { type : 'C2', lifetime : 16 },
	'L477' : { type : 'C3', lifetime : 16 },
	'M267' : { type : 'C3', lifetime : 16 },
	'X702' : { type : 'C3', lifetime : 24 },
	'Y790' : { type : 'C1', lifetime : 16 },
	'Z006' : { type : 'C3', lifetime : 16 },
	'Z647' : { type : 'C1', lifetime : 16 },
	'Z971' : { type : 'C1', lifetime : 16 },
	'N766' : { type : 'C2', lifetime : 16 },
	'N968' : { type : 'C3', lifetime : 16 },
	'O477' : { type : 'C3', lifetime : 16 },
	'O883' : { type : 'C3', lifetime : 16 },
	'P060' : { type : 'C1', lifetime : 16 },
	'R943' : { type : 'C2', lifetime : 16 },
	'V301' : { type : 'C1', lifetime : 16 },
	'Q317' : { type : 'C1', lifetime : 16 },
	'C391' : { type : 'Lowsec', lifetime : 48 },
	'A239' : { type : 'Lowsec', lifetime : 24 },
	'C140' : { type : 'Lowsec', lifetime : 24 },
	'J244' : { type : 'Lowsec', lifetime : 24 },
	'N290' : { type : 'Lowsec', lifetime : 24 },
	'N944' : { type : 'Lowsec', lifetime : 24 },
	'R051' : { type : 'Lowsec', lifetime : 16 },
	'U210' : { type : 'Lowsec', lifetime : 24 },
	'V898' : { type : 'Lowsec', lifetime : 16 },
	'C008' : { type : 'C5', lifetime : 16 },
	'E175' : { type : 'C4', lifetime : 16 },
	'H296' : { type : 'C5', lifetime : 24 },
	'H900' : { type : 'C5', lifetime : 24 },
	'L614' : { type : 'C5', lifetime : 24 },
	'M001' : { type : 'C4', lifetime : 16 },
	'M555' : { type : 'C5', lifetime : 24 },
	'M609' : { type : 'C4', lifetime : 16 },
	'N062' : { type : 'C5', lifetime : 24 },
	'N432' : { type : 'C5', lifetime : 24 },
	'N770' : { type : 'C5', lifetime : 24 },
	'O128' : { type : 'C4', lifetime : 24 },
	'T405' : { type : 'C4', lifetime : 16 },
	'V911' : { type : 'C5', lifetime : 24 },
	'X877' : { type : 'C4', lifetime : 16 },
	'Y683' : { type : 'C4', lifetime : 16 },
	'Z457' : { type : 'C4', lifetime : 16 },
	'T458' : { type : 'Thera', lifetime : 16 },
	'L031' : { type : 'Thera', lifetime : 16 },
	'M164' : { type : 'Thera', lifetime : 16 },
	'F135' : { type : 'Thera', lifetime : 16 },
	'F355' : { type : 'Thera', lifetime : 16 },
	'K162' : { type : 'K162', lifetime : 24 }
};

var sigitem = Vue.component('sig-item', {
	template : '#sig-item-template',
	props: ['sig'],
	data : function() {
		return { lifetime : 0 };
	},
	methods : {
		sigRemove : function() { window.bus.$emit('sig-remove', this.sig); }
	},
	watch : {
		'sig.tag' : function(newTag) {
			this.lifetime = whMap[newTag].lifetime;
			this.sig.type = whMap[newTag].type;
		}
	},
	computed : {
		isWormhole     : function() { return this.sig.site === 'Wormhole'; },
		lifetimeString : function() { return this.lifetime + ' hr'; }
	}
});

var siglist = Vue.component('sig-list', {
	template : '#sig-list-template',
	components : [sigitem],
	props : ['sigs']
});

var sigdump = Vue.component('sig-dump', {
	template : '#sig-dump-template',
	data : function() {
		return { dump : '' };
	},
	methods : {
		chunk : function(input, size) {
			var ret = [];
			for (var i = 0; i < input.length; i += size) {
				ret.push(input.slice(i, i + size));
			}
			return ret;
		},
		parseDump : function(dump) {
			return this.chunk(dump.split(/[\t\r\n]/), 6).map(line => {
				return {
					id      : line[0],
					type    : line[1],
					site    : line[2],
					label   : line[3],
					percent : line[4],
					dist    : line[5],
				};
			}).filter(line => line.id.length);
		}
	},
	watch : {
		dump : function(newDump, oldDump) {
			if ( ! newDump.length || newDump === oldDump) { return; }
			window.bus.$emit('sig-dump', this.parseDump(newDump));
		}
	}
});

var evehole = new Vue({
	el: '#evehole',
	components : [sigdump, siglist],
	data : {
		sigs : []
	},
	created : function() {
		this.init();
	},
	mounted : function() {
		window.bus.$on('sig-remove', this.handleRemove);
		window.bus.$on('sig-add', this.handleAdd);
		window.bus.$on('sig-dump', this.handleDump);
	},
	methods : {
		init : function() {
			console.log('[@] initializing...');
			this.loadSigs();
		},
		handleAdd : function(sig) {
			this.sigs.push(sig);
		},
		handleRemove : function(sig) {
			this.sigs = this.sigs.filter(s => s.id !== sig.id);
		},
		handleDump : function(dump) {
			this.sigs = dump;
		},
		loadSigs : function() {
			try {
				this.sigs = JSON.parse(sessionStorage.getItem('sigs')) || [];
			} catch (e) {
				sessionStorage.removeItem('sigs');
			}
			console.log('[=] loaded sigs.')
		},
		saveSigs : function() {
			sessionStorage.setItem('sigs', JSON.stringify(this.sigs));
			console.log('[+] saved sigs.');
		}
	},
	watch : {
		sigs : function(newSigs, oldSigs) {
			this.saveSigs();
		}
	}
});
