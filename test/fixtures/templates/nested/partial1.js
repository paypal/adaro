(function(){dust.register("nested/partial1",body_0);function body_0(chk,ctx){return chk.write("<h1>").reference(ctx.get("name"),ctx,"h").write("</h1>").section(ctx.get("cities"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.partial("nested/partial2",ctx,null);}return body_0;})();