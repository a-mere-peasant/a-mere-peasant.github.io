const showdown = require("showdown");
const fs = require("fs");
const converter = new showdown.Converter();
const post_dir = "_posts";
const layout_dir = "_layouts";
const output_dir = "_site";
const asset_dir = "assets";
const pages_dir = "_pages";
const dessert_dir = "dessert";
const allFiles = "All"
const header_file_path = "_layouts/header.html"
const header = get_file_content(header_file_path); 
const post_layout = get_file_content(layout_dir+"/post.html");
const externals = get_file_content(layout_dir+"/externals.html");
const footer = get_file_content(layout_dir+"/footer.html");
const nliners = get_file_content("nliners.txt").trim().replaceAll("\n","~");
const post_output_dir = output_dir+"/"+post_dir;
const post_index_mapping = {
	"Posts from the past":"Past",
	"Posts from the present":"Present",
	"Posts from the future":"Future",
}

let post_index ={};

build();
async function build(){
	await make_site_dir(output_dir);
	await build_site_posts();
	build_post_index(post_index);
}
async function build_site_posts(){
	await fs.promises.mkdir(post_output_dir);
	const post_files = await fs.promises.readdir(post_dir,"utf-8");
	post_index[allFiles] = [];
	post_files.forEach(function(file) {
		if(fs.statSync(post_dir+"/"+file).isDirectory()){
			console.log(file, post_index_mapping[file]);
			post_index[post_index_mapping[file]] = [];
			const sub_index_files = fs.readdirSync(post_dir+"/"+file,"utf-8");
			sub_index_files.forEach(function(sub_file){	
				post_index[post_index_mapping[file]].push(make_post(sub_file,post_dir+"/"+file));
				post_index[allFiles].push(encodeURIComponent(sub_file.split(".")[0]));
			});
		}
	});
}


function make_post(input_file,post_dir){
	console.log("Making post",input_file);
	fs.readFile(post_dir + "/" + input_file, 'utf-8', function(err, content) {
		if (err) {
			console.error("Error reading the file ",post_dir+"/"+ input_file, err);
			process.exit(1);
		}
		let post_base = post_layout.replace("[%externals%]",externals);
		post_base = post_base.replace("[%header%]",header);
		post_base = post_base.replace("[%footer%]",footer);
		let output_html = converter.makeHtml(content);
		output_html = post_base.replace("[%content%]", output_html);
		const out_filename = input_file.split(".")[0] + ".html";
		fs.writeFile(post_output_dir+"/" +out_filename, output_html, function(err) {
			if (err) {
				console.error("Error writing the file", post_output_dir+"/"+ out_filename, err);
				process.exit(1);
			}
		});	
	});
	return encodeURIComponent(input_file.split(".")[0]);
}

async function make_site_dir(output_dir_name){
	console.log("Making output directory");
	if(fs.existsSync(output_dir_name)){
		fs.rmSync(output_dir_name,{recursive:true});
	}
	try{
		fs.promises.mkdir(output_dir_name)
		fs.promises.cp("index.html",output_dir_name + "/index.html");
		fs.promises.cp("404.html",output_dir_name + "/404.html");
		await	copy_to_output_dir(pages_dir);
		copy_to_output_dir(asset_dir);
		copy_to_output_dir(dessert_dir);
		add_base_content(output_dir_name+"/"+pages_dir+"/dessert.html");
		add_base_content(output_dir_name+"/"+pages_dir+"/homepage.html");
		add_base_content(output_dir_name + "/404.html");
		add_base_content(output_dir_name+"/"+pages_dir+"/nliners.html");
	}catch(err){
		console.error("Error while making output directory",err);
	}}

function build_post_index(post_index){
	console.log("Building post index");
	let post_index_html = `<div class=post-index><div class="index-headers">`;
	let counter = 1;
	for(const section_header in post_index){
		post_index_html += `<div id="sh-${counter}" class="post-index-section-header" onclick="get_section_list(this)">
					${section_header}
				    </div>`
		counter++;
	}
	post_index_html+=`</div><div class="index-lists">`;
	counter=1;
	for(const section_header in post_index){
		post_index_html += `<div class="post-index-section-list" id="${section_header}"><ul>`;
		post_index_html += post_index[section_header].map(section_item =>
			`<li>
			<a href="../_posts/${section_item}.html" class="post_section_item inactive">${decodeURIComponent(section_item)}</a>
			</li>`
		).join('');
		post_index_html += "</ul></div>";
		counter++;
	}
	post_index_html+=`</div></div>`;
	let  post_index_content = fs.readFileSync(output_dir+"/_pages/posts.html","utf8");
	post_index_content = post_index_content.replace("[%post_index%]",post_index_html);
	fs.writeFileSync(output_dir+"/_pages/posts.html",post_index_content);
	add_base_content(output_dir+"/"+pages_dir+"/posts.html");
}


async function copy_to_output_dir(dir_name){
	try{
		await fs.promises.cp(dir_name,output_dir+"/"+dir_name,{recursive:true});
		console.log("Copied",dir_name,"to output directory");
	}catch(err){
		console.error("Error in copying",dir_name,"to output directory",err);
		process.exit(1);
	}}

function get_file_content(filepath){
	try{
		return fs.readFileSync(filepath,"utf-8");
	}catch(err){
		console.error("Error while reading file:",filepath,err);
	}}

function add_base_content(file){
	console.log("Adding base content to",file);
	fs.readFile(file,"utf-8",function(err,content){
		if(err){
			console.log("Error while reading file:",file,err);
			process.exit(1);
		}
		content = content.replace("[%externals%]",externals);
		content = content.replace("[%header%]",header);
		content = content.replace("[%footer%]",footer);
		content = content.replace("[%nliners%]",nliners)
		fs.writeFile(file,content,function(err){
			if(err){
				console.error("Error while writing file:",file,err);
				process.exit(1);
			}
			console.log("Added base content to",file);
		});
	}); }
