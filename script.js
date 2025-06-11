const regionFeeds = {
  US: "https://api.daznfeeds.com/livestream/s99r43e6vzn01rtfokcnlvjwx/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Japan: "https://api.daznfeeds.com/livestream/bd0hskvlodi14alfsom98pqi/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Central: "https://api.daznfeeds.com/livestream/1d6kywwtz568311m986sys4vhm/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Canada: "https://api.daznfeeds.com/livestream/wbac02p8ie5111jaeapaal6kq/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Italy: "https://api.daznfeeds.com/livestream/wbac02p8ie5111jaeapaal6kq/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Spain: "https://api.daznfeeds.com/livestream/wbac02p8ie5111jaeapaal6kq/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Brazil: "https://api.daznfeeds.com/livestream/e53b0s82vpnv1epl6ckjib5hb/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  ROW: "https://api.daznfeeds.com/livestream/1vw4a7d9kk73m1kurl4hsvzl59/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Belgium: "https://api.daznfeeds.com/livestream/1s01myh4xwvs91gp8tqvwllj76/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  France: "https://api.daznfeeds.com/livestream/1h9emivijm87d13yxr38arhw4f/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Portugal: "https://api.daznfeeds.com/livestream/c9qhvff9uz21skuh4zctiz1n/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  Taiwan: "https://api.daznfeeds.com/livestream/1ovfmjfvdq1321dpuxti2x2c8q/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000",
  DACH: "https://api.daznfeeds.com/livestream/14c4m63ov2fei1f3pfh9tgrfdf/?_fmt=json&_rt=b&_fld=oaId,cmId,dc,mta,ac,heETN,heR,drm,cc,rid,desc,oid,al,sst,set,wmk,lnk.urn:perform:mfl:fixture,lmt&_als=l&_ord=sst&_ordSrt=asc&_pgSz=1000"
};


document.getElementById("region-select").addEventListener("change", async function () {
  const region = this.value;
  const url = regionFeeds[region];
  const container = document.getElementById("metadata-container");
  container.innerText = "Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();
    container.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    container.innerText = "Error fetching data: " + err.message;
  }
});
