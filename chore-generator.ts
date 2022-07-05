/*GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.*/


import {ANIME, BOOKS, MANGA, COMICS, LIGHT_NOVELS, MOVIES} from '@consumet/extensions'
import fs from "fs"
import {performance} from "perf_hooks"

const start = async() => {
 let output = '| **provider** | **Status** | **Time** |\n|:--------:|:------:|:----:|\n'
 let t0, t1 = performance.now()
	const NineAnime = new ANIME.NineAnime()
 try {
	t0 = performance.now()
	 const NineAnimeRes = await NineAnime.search("One Piece")
	 t1 = performance.now()
	if (NineAnimeRes.results){
		 output += `| [${NineAnime.name}](https://9anime.to) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${NineAnime.name}](https://9anime.to) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${NineAnime.name}](https://9anime.to) | 🔴 500 | 0s |\n`
	}
	const Gogoanime = new ANIME.Gogoanime()
 try {
	t0 = performance.now()
	 const GogoanimeRes = await Gogoanime.search("One Piece")
	 t1 = performance.now()
	if (GogoanimeRes.results){
		 output += `| [${Gogoanime.name}](https://gogoanime.gg) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${Gogoanime.name}](https://gogoanime.gg) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${Gogoanime.name}](https://gogoanime.gg) | 🔴 500 | 0s |\n`
	}
	const MangaDex = new MANGA.MangaDex()
 try {
	t0 = performance.now()
	 const MangaDexRes = await MangaDex.search("One Piece")
	 t1 = performance.now()
	if (MangaDexRes.results){
		 output += `| [${MangaDex.name}](https://mangadex.org) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${MangaDex.name}](https://mangadex.org) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${MangaDex.name}](https://mangadex.org) | 🔴 500 | 0s |\n`
	}
	const Libgen = new BOOKS.Libgen()
 try {
	t0 = performance.now()
	 const LibgenRes = await Libgen.search("One Hundred Years of Solitude")
	 t1 = performance.now()
	if (LibgenRes){
		 output += `| [${Libgen.name}](http://libgen) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${Libgen.name}](http://libgen) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${Libgen.name}](http://libgen) | 🔴 500 | 0s |\n`
	}
	const GetComics = new COMICS.GetComics()
 try {
	t0 = performance.now()
	 const GetComicsRes = await GetComics.search("batman")
	 t1 = performance.now()
	if (GetComicsRes.containers){
		 output += `| [${GetComics.name}](https://getcomics.info/) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${GetComics.name}](https://getcomics.info/) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${GetComics.name}](https://getcomics.info/) | 🔴 500 | 0s |\n`
	}
	const ReadLightNovels = new LIGHT_NOVELS.ReadLightNovels()
 try {
	t0 = performance.now()
	 const ReadLightNovelsRes = await ReadLightNovels.search("One Piece")
	 t1 = performance.now()
	if (ReadLightNovelsRes.results){
		 output += `| [${ReadLightNovels.name}](https://readlightnovels.net) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${ReadLightNovels.name}](https://readlightnovels.net) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${ReadLightNovels.name}](https://readlightnovels.net) | 🔴 500 | 0s |\n`
	}
	const FlixHQ = new MOVIES.FlixHQ()
 try {
	t0 = performance.now()
	 const FlixHQRes = await FlixHQ.search("batman")
	 t1 = performance.now()
	if (FlixHQRes.results){
		 output += `| [${FlixHQ.name}](https://flixhq.to) | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `| [${FlixHQ.name}](https://flixhq.to) | 🔴 500 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
} catch (e) {
	 output += `| [${FlixHQ.name}](https://flixhq.to) | 🔴 500 | 0s |\n`
	}
fs.writeFileSync('./README.md', output)}



start()