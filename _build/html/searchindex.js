Search.setIndex({"docnames": ["ch1Rbasics", "ch2RPlotting", "ch3Functions", "ch4Loops", "ch5R3Dplotting", "ch6Matrices", "ch7Integrals", "intro"], "filenames": ["ch1Rbasics.ipynb", "ch2RPlotting.ipynb", "ch3Functions.ipynb", "ch4Loops.ipynb", "ch5R3Dplotting.ipynb", "ch6Matrices.ipynb", "ch7Integrals.ipynb", "intro.md"], "titles": ["<span class=\"section-number\">1. </span>Basics of R", "<span class=\"section-number\">2. </span>Plotting in R", "<span class=\"section-number\">3. </span>Writing your own functions in R", "<span class=\"section-number\">4. </span>Loops in R", "<span class=\"section-number\">5. </span>Plotting bivariate functions in R", "<span class=\"section-number\">6. </span>Linear algebra in R", "<span class=\"section-number\">7. </span>Numerical integration in R", "&lt;no title&gt;"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7], "chapter": [0, 1, 2, 3, 4, 5, 6, 7], "an": [0, 1, 2, 3, 4, 5, 6], "introduct": [0, 3], "capabl": 0, "after": [0, 1, 2, 3], "go": [0, 1], "through": [0, 1, 2, 3, 4, 5, 6, 7], "you": [0, 1, 2, 3, 4, 5, 6, 7], "abl": [0, 1, 2, 3, 4, 5, 6], "add": [0, 1, 5], "creat": [0, 1, 2, 3, 6], "To": [0, 1, 2, 3, 4, 5, 6], "explor": 0, "below": [0, 1, 2, 3, 4, 5, 6], "yourself": [0, 6, 7], "need": [0, 1, 3, 4, 6, 7], "work": [0, 1, 2, 3, 4, 7], "instal": [0, 1, 2, 3, 4, 5, 6, 7], "machin": 0, "further": [0, 1, 2, 4, 5, 6], "recommend": [0, 1, 2, 3, 4, 5, 6, 7], "rstudio": [0, 1, 2, 3, 4, 5, 6, 7], "rather": [0, 1, 3, 4, 5, 6], "than": [0, 1, 3, 4, 5, 6], "gui": 0, "run": [0, 1, 2, 3, 4, 5, 6], "The": [0, 2, 3, 4, 5, 6, 7], "best": [0, 1, 2, 3, 4, 5, 6, 7], "wai": [0, 1, 2, 3, 4, 5, 6, 7], "read": [0, 1, 2, 3, 4, 5, 6], "discuss": [0, 1, 2, 3, 4, 5, 6, 7], "reproduc": [0, 1, 2, 3, 4, 5, 6], "all": [0, 1, 2, 3, 4, 5, 6], "own": [0, 1, 3, 4, 5, 6], "can": [0, 1, 2, 3, 4, 5, 6, 7], "do": [0, 1, 2, 3, 5, 6], "copi": [0, 1, 2, 3, 4, 5, 6], "from": [0, 1, 2, 3, 4, 5, 7], "notebook": [0, 1, 2, 3, 4, 5, 6], "cell": [0, 1, 2, 3, 4, 5, 6], "script": [0, 1, 2, 3, 4, 5, 6], "line": [0, 2, 3, 4, 5, 6], "includ": [0, 1, 2, 3, 4, 5, 6], "allow": [0, 1, 2, 3, 4, 5, 6], "test": [0, 1, 2, 3, 4, 5, 6], "understand": [0, 1, 2, 3, 4, 5, 6], "It": [0, 1, 2, 3, 4, 5, 6], "try": [0, 1, 2, 3, 4, 5, 6], "befor": [0, 1, 2, 3, 4, 5, 6], "choos": [0, 1, 2, 3, 4, 5, 6], "option": [0, 3, 4, 6], "reveal": [0, 1, 2, 3, 4, 5, 6], "power": [0, 1, 3], "In": [0, 1, 2, 3, 4, 5, 6, 7], "enter": [0, 3, 5], "prompt": [0, 1], "command": [0, 1, 3], "consol": [0, 2, 4], "press": 0, "we": [0, 1, 2, 3, 4, 5, 6], "know": [0, 1, 3, 4, 6], "syntax": [0, 1, 2, 3, 4, 6], "addit": [0, 4], "subtract": [0, 5], "multipl": 0, "divis": [0, 5], "exponenti": [0, 1], "bracket": [0, 1], "For": [0, 1, 2, 3, 4, 5, 6], "exampl": [0, 4, 6], "4": [0, 2, 4, 5], "5": [0, 2, 3, 5, 6], "6": [0, 1, 2, 3, 6], "30": [0, 4], "27": [0, 5], "25": [0, 1, 2, 3, 4, 6], "abov": [0, 1, 2, 3, 4, 5, 6], "extend": [0, 1], "arbitrarili": [0, 5], "howev": [0, 1, 2, 3, 4, 5, 6], "make": [0, 1, 2, 3, 4, 5], "sure": [0, 1, 3, 4], "when": [0, 1, 2, 3, 4, 5, 6], "9": [0, 3, 4, 5], "frac": [0, 2, 3, 6], "while": [0, 1, 2, 4, 5, 6], "As": [0, 1, 2, 3, 4, 5, 6], "anoth": [0, 3, 4], "time": [0, 1, 3, 4, 5, 7], "19": [0, 1, 2, 3, 5], "here": [0, 1, 4, 7], "ar": [0, 1, 2, 3, 4, 5, 6, 7], "more": [0, 1, 2, 3, 5, 6], "complic": [0, 1, 2, 5], "type": [0, 1, 2, 3, 4, 5], "129": 0, "729": 0, "127": 0, "828427124746": 0, "squar": [0, 5], "root": 0, "sqrt": 0, "x": [0, 1, 2, 3, 5, 6], "return": [0, 1, 2, 3, 4, 5, 6, 7], "note": [0, 1, 3, 4, 5, 6, 7], "equival": [0, 1, 5, 6], "state": 0, "natur": [0, 1, 3], "exp": 0, "e": [0, 1, 2, 3, 5, 6, 7], "base": [0, 1, 2, 3, 4, 5], "differ": [0, 1, 2, 3, 4, 5, 6], "simpli": [0, 1, 2, 3, 4, 5, 6], "notat": [0, 3], "20": [0, 3, 4, 6], "0855369231877": 0, "logarithm": [0, 5], "log": 0, "ln": 0, "call": [0, 1, 2, 3, 4, 6], "i": [0, 1, 3, 4, 5, 6], "09861228866811": 0, "other": [0, 1, 2, 3, 5, 6], "log_a": 0, "8": [0, 1, 3, 4, 5], "log_2": 0, "By": [0, 1, 3, 4, 5, 6], "correctli": [0, 2, 5], "log_5": 0, "10": [0, 1, 3, 4], "2656246752053": 0, "follow": [0, 1, 2, 3, 4, 5, 6, 7], "7": [0, 1, 2, 3, 5, 6], "b": [0, 1, 5, 6, 7], "times5": 0, "program": [0, 1, 2, 3, 7], "often": [0, 1, 5], "have": [0, 1, 2, 3, 4, 5, 6, 7], "write": [0, 3, 4, 5, 6], "long": [0, 2], "piec": [0, 2, 3, 4], "messi": 0, "text": [0, 2, 5], "execut": [0, 2, 3, 7], "help": [0, 1, 2], "coder": 0, "explain": [0, 5], "herself": 0, "readabl": [0, 5], "start": [0, 1, 3, 6], "somewher": 0, "anyth": [0, 1], "remain": [0, 1], "itself": 0, "A": [0, 3, 4, 5], "also": [0, 1, 2, 4, 5, 6, 7], "end": [0, 5], "encount": 0, "so": [0, 1, 2, 3, 5, 6], "far": [0, 6], "suffici": [0, 1, 4, 5, 6], "explan": [0, 1], "good": [0, 1, 4], "idea": [0, 1, 2, 3, 6], "get": [0, 1, 2, 5, 6], "habit": 0, "These": [0, 1], "concept": [0, 2], "ha": [0, 2, 3, 4, 5, 6], "distinct": [0, 1, 2, 5], "although": [0, 1, 2, 3], "relat": [0, 1, 2], "mean": [0, 1, 2, 3, 6], "context": [0, 1, 2, 3, 5, 6], "adopt": 0, "perspect": [0, 4], "think": [0, 2, 3, 5], "name": [0, 1, 2, 6], "storag": 0, "store": [0, 2, 6], "interest": [0, 1, 3, 4, 6], "access": [0, 1, 7], "whose": [0, 2, 4], "same": [0, 2, 3, 4, 5, 6], "done": [0, 3, 5, 6], "both": [0, 1, 3, 4, 5, 7], "prefer": 0, "partli": 0, "histor": 0, "reason": [0, 2, 3, 5], "henceforth": [0, 1, 5], "new": [0, 1, 2, 3, 4], "now": [0, 1, 4, 5, 6], "retun": 0, "furthermor": 0, "place": [0, 1, 5], "s": [0, 1, 3, 4, 5, 6], "ani": [0, 1, 2, 3, 4, 6, 7], "involv": [0, 2, 4, 5, 6], "thee": 0, "stire": 0, "ass": [0, 1], "Then": [0, 1, 2, 3, 4, 5, 6], "4r": 0, "see": [0, 1, 2, 3, 4, 6], "its": [0, 1, 2, 3, 5, 6], "equal": [0, 1, 2, 3, 4, 5, 6], "purpos": [0, 2, 3, 5, 6], "naiv": 0, "data": [0, 1, 5], "structur": [0, 1], "repres": [0, 6], "list": [0, 1, 2], "learn": [0, 1], "about": [0, 1, 4, 6], "precis": [0, 6], "later": [0, 1, 2, 7], "cours": [0, 1, 2, 4, 5], "stage": [0, 1, 2, 4, 6], "emphasis": [0, 4], "which": [0, 1, 2, 3, 4, 5, 6], "mani": [0, 1, 6], "topic": 0, "four": [0, 1, 2], "element": [0, 1, 2, 3, 4, 6], "first": [0, 1, 2, 3, 4, 5], "second": [0, 1, 3, 5, 6], "third": [0, 1], "fourth": 0, "even": [0, 1, 2, 4, 6], "though": [0, 1], "thei": [0, 1, 2, 4, 5, 6], "contain": [0, 7], "appear": [0, 1, 2, 3], "matter": [0, 3], "gener": [0, 1, 3, 4, 5, 6], "form": [0, 5, 6], "x1": [0, 1], "x2": [0, 1], "xn": 0, "where": [0, 1, 2, 4, 5, 6], "specif": [0, 1, 2, 4, 6, 7], "1257": 0, "obtain": [0, 2, 3, 5, 6], "length": [0, 1, 2, 4, 5, 6], "index": [0, 3], "given": [0, 1, 2, 3, 4, 5, 6], "vec": 0, "n": [0, 1, 3, 4, 5], "th": [0, 3, 4, 5, 6], "4th": [0, 4], "especi": [0, 1, 5, 6], "plot": [0, 3, 6], "seq": [0, 1, 2, 4, 6], "sequenc": [0, 3], "d": [0, 1, 5], "last": [0, 3], "distanc": [0, 1, 6], "between": [0, 1, 2, 4, 6], "consecut": 0, "12345678910": 0, "0": [0, 1, 2, 3, 4, 5, 6], "11": [0, 1, 4, 5], "522": 0, "533": 0, "544": 0, "555": 0, "566": 0, "577": 0, "588": 0, "599": 0, "510": 0, "exactli": [0, 1, 3, 4, 5, 6], "achiev": [0, 1, 3], "pass": [0, 1, 5], "argument": [0, 2, 3, 4, 5], "without": [0, 1, 2, 3, 6], "keyword": [0, 1], "check": [0, 1, 4], "defin": [0, 1, 3, 4, 6], "12th": 0, "12": [0, 1, 2, 3, 5], "find": [0, 1, 2, 3, 4, 5, 6], "13th": 0, "13": [0, 4, 5, 6], "seen": [0, 3, 4, 5, 6], "one": [0, 2, 3, 4, 5, 6], "shorthand": 0, "instead": [0, 1, 3, 4, 5, 6], "10123": 0, "becaus": [0, 1, 2, 3, 4, 5, 6], "cannot": [0, 5, 6], "nonetheless": [0, 3], "case": [0, 1, 4, 5, 6], "want": [0, 1, 2, 3, 4, 5, 6], "integ": 0, "dure": [0, 2, 7], "should": [0, 1, 3, 4, 5, 6, 7], "awar": 0, "complet": [0, 1, 2, 3, 4, 5, 6, 7], "next": [0, 1, 2, 3, 4, 5, 6], "turn": [0, 1, 2, 3, 4, 5], "attent": [0, 1, 2, 3, 4, 5], "quick": [1, 2, 3, 4, 5, 6], "guid": [1, 2, 4, 5, 6], "univari": [1, 4, 6], "customis": [1, 4], "intend": [1, 2, 3], "onli": [1, 2, 3, 4, 5, 6, 7], "core": [1, 4, 5], "avail": [1, 4], "built": [1, 4, 6], "graphic": [1, 4, 6], "packag": [1, 4], "requir": [1, 3, 4], "mai": [1, 2, 4, 5, 6], "refer": [1, 3], "offici": 1, "document": [1, 4], "alwai": [1, 4, 5], "regard": 1, "particular": [1, 6], "code": [1, 2, 3, 4, 5, 6, 7], "some": [1, 2, 4, 5, 6, 7], "most": [1, 2, 6, 7], "invok": [1, 3], "y": [1, 2], "coordin": [1, 2, 4], "vector": [1, 2, 3, 4, 6], "correspond": [1, 2, 3, 4, 5, 6], "someth": [1, 5], "veri": [1, 2, 3, 4, 5, 6], "notic": [1, 2, 3, 4, 5, 6], "region": 1, "appropri": [1, 4, 5], "automat": [1, 5], "manual": 1, "xlim": 1, "ylim": 1, "c": [1, 2, 5, 6], "over": [1, 2, 3, 6], "axi": [1, 6], "assign": [1, 4], "were": [1, 3, 6], "correspondingli": 1, "how": [1, 2, 3, 4, 5], "clearli": [1, 6], "xlab": 1, "ylab": 1, "take": [1, 2, 3, 5, 6], "string": 1, "valu": [1, 2, 3, 4, 6], "enclos": [1, 5], "box": [1, 4], "remov": [1, 3, 4], "frame": [1, 2], "fals": [1, 2, 4, 6], "main": [1, 2], "black": 1, "color": [1, 4], "object": [1, 2], "col": [1, 2, 4, 6], "either": [1, 5], "g": [1, 2, 3, 6], "blue": 1, "number": [1, 2, 3, 4, 5, 6], "out": [1, 2, 3, 5, 6], "red": [1, 2, 4, 6], "size": 1, "cex": 1, "shape": 1, "pch": [1, 2], "etc": [1, 6], "17": [1, 4, 5, 6], "heart": 1, "import": [1, 2, 4], "produc": [1, 2, 4, 6], "rich": 1, "well": [1, 2, 5, 6], "onlin": [1, 4], "resourc": [1, 4], "wa": [1, 3, 4], "continu": [1, 4, 5], "small": [1, 3, 4, 7], "forward": 1, "again": [1, 3, 5], "recal": [1, 3], "section": [1, 4, 5, 6], "previou": 1, "specifi": [1, 2, 3, 4, 5, 6, 7], "x_1": [1, 5], "x_2": [1, 5], "x_n": 1, "like": [1, 2, 3, 5], "two": [1, 2, 3, 5, 6], "scalar": 1, "properti": 1, "sequenti": [1, 3], "green": 1, "magenta": 1, "colour": [1, 4], "solid": [1, 4], "dot": [1, 3], "five": [1, 6], "onc": [1, 2, 3, 4, 6, 7], "individu": 1, "conceptu": [1, 4], "readi": 1, "easi": [1, 4, 5, 6], "similar": [1, 3, 4], "evenli": [1, 4], "space": [1, 4], "domain": [1, 2], "5x": 1, "alreadi": [1, 2, 3, 4, 7], "arithmet": [1, 5], "oper": [1, 3, 5, 7], "sens": [1, 2, 6], "appli": [1, 6], "each": [1, 2, 3, 4, 5, 6, 7], "pointwis": [1, 5], "outcom": 1, "ident": [1, 2], "easili": [1, 2, 3, 5, 6], "mathemat": [1, 2, 3, 5], "consist": [1, 4, 5, 6], "implement": [1, 2, 4, 5, 6], "just": [1, 4, 5, 6], "keep": [1, 4], "mind": [1, 4], "instanc": [1, 3], "word": [1, 5], "against": [1, 4], "l": [1, 2, 4], "And": [1, 3, 4, 6], "procedur": [1, 3, 4, 5, 6], "everi": [1, 2], "express": [1, 2, 3, 5, 6], "might": [1, 3, 6], "had": 1, "would": [1, 2, 3, 6], "taken": [1, 3], "default": [1, 4, 5], "p": 1, "suppress": 1, "circl": 1, "draw": [1, 6], "segment": 1, "connect": 1, "them": [1, 2, 4, 5, 6], "let": [1, 4, 5, 6], "consid": [1, 2, 3, 4, 5, 6], "4x": 1, "problem": 1, "what": [1, 5], "actual": 1, "doe": [1, 2, 3, 5], "previous": 1, "straight": 1, "non": [1, 3, 5], "linear": 1, "too": 1, "jumpi": 1, "visual": [1, 5], "finer": 1, "smaller": 1, "funcion": 1, "colon": 1, "smooth": 1, "ey": 1, "still": [1, 6], "larg": [1, 3, 6], "At": [1, 2, 3, 4], "cheat": 1, "magnifi": 1, "imag": 1, "proper": 1, "curv": [1, 4, 6], "true": [1, 2, 5, 6], "sophist": 1, "comput": [1, 2, 6, 7], "math": 1, "accustom": 1, "interv": 1, "infinit": [1, 6], "real": 1, "therefor": [1, 2, 4, 6], "properli": 1, "could": [1, 2, 3], "perfect": 1, "much": [1, 3, 5, 6], "won": 1, "t": [1, 2, 3, 4, 5, 6], "notion": [1, 5], "deal": [1, 6], "finit": 1, "enough": [1, 3], "philosophi": 1, "usual": 1, "unnecessari": 1, "typic": [1, 5], "show": [1, 2], "enabl": 1, "disabl": 1, "addition": 1, "lwd": [1, 2, 4, 6], "width": [1, 6], "lty": [1, 2, 6], "dash": [1, 6], "If": [1, 2, 5, 7], "familiar": [1, 4, 6], "paramet": 1, "our": [1, 2, 3, 5], "under": [1, 6], "typeset": 1, "latex2exp": 1, "load": 1, "librari": [1, 4], "tex": 1, "IN": 1, "parenthes": 1, "preced": 1, "letter": 1, "open": [1, 7], "initi": [1, 3], "window": [1, 2], "top": 1, "construct": [1, 2, 5], "side": [1, 2, 5], "arrow": 1, "x0": 1, "y0": 1, "y1": 1, "chang": [1, 4], "straightforward": [1, 4], "sai": [1, 2, 3, 5, 6], "y2": 1, "y3": 1, "constant": [1, 3], "forth": [1, 3, 4, 5], "round": 1, "8x": 1, "16x": 1, "16": [1, 4, 5], "easier": [1, 3, 6], "distinguish": 1, "Or": [1, 4], "don": [1, 2, 3, 4, 6], "usag": [1, 4, 5, 6], "posit": 1, "pair": [1, 4], "topleft": 1, "topright": 1, "bottomleft": 1, "item": 1, "2x": [1, 2], "3x": [1, 2], "bty": 1, "around": 1, "omit": [1, 5, 6], "happen": 1, "origin": [1, 5], "intersect": 1, "occur": [1, 2, 3], "locat": 1, "po": [1, 2, 6], "determin": 1, "rel": [1, 2, 3], "left": [1, 3, 6], "right": [1, 3, 6], "ablin": [1, 6], "h": [1, 2], "v": [1, 6], "necessarili": [1, 2], "demonstr": [1, 3], "possibl": 1, "edg": 1, "elsewher": 1, "bit": [1, 3, 4, 6], "cumbersom": [1, 5], "difficult": [1, 3, 5], "zero": [1, 5, 6], "insid": [1, 3, 5], "tick": [1, 4], "rotat": 1, "la": [1, 6], "perhap": [1, 4], "off": [1, 5], "labe": 1, "schemat": 1, "direct": [1, 4], "increas": [1, 6], "limit": [1, 6], "15": [1, 3, 5], "reduc": 1, "head": 1, "inch": 1, "move": [1, 4], "empti": 1, "cobin": 1, "tell": [1, 2], "matrix": [1, 4], "number_of_row": 1, "row": [1, 4], "number_of_column": 1, "column": [1, 4], "par": 1, "mfrow": 1, "result": [1, 2, 3, 5, 6], "final": [1, 3, 6], "reset": 1, "y4": 1, "y5": 1, "f": [1, 2, 6], "bottom": [1, 6], "system": [1, 7], "equat": 1, "y6": 1, "mtext": 1, "quadrat": 1, "outer": 1, "user": [1, 2, 6], "emphasi": 2, "ones": [2, 4], "studi": 2, "modul": [2, 5, 7], "lectur": [2, 3, 4, 5, 6, 7], "rule": [2, 5], "input": [2, 5], "quantiti": 2, "output": [2, 3, 5], "transform": 2, "abstract": 2, "map": [2, 4], "uniqu": [2, 4, 5], "suppos": [2, 3, 4, 5, 6], "some_funct": 2, "arg1": 2, "arg2": 2, "argn": 2, "calcul": [2, 3, 5, 6], "prior": 2, "statement": [2, 3, 4], "12x": 2, "evalu": [2, 5, 6], "complex": [2, 5], "89473684210526": 2, "f1": 2, "f2": 2, "term1": 2, "term2": 2, "term3": 2, "suggest": [2, 3], "simpl": [2, 3, 4, 5], "2": [2, 6], "One": [2, 3, 4, 6], "yet": 2, "multivari": 2, "come": [2, 4], "soon": [2, 4], "exact": [2, 3, 6], "three": [2, 4], "z": [2, 4], "advanc": 2, "directli": [2, 3], "relev": [2, 3, 5], "supplement": 2, "worri": [2, 3, 4, 5], "difficulti": 2, "fundament": 2, "languag": 2, "sinc": [2, 4, 5, 6], "durat": 2, "degre": [2, 4], "inform": 2, "within": 2, "part": 2, "environ": 2, "whenev": 2, "outsid": [2, 3], "subsequ": [2, 3], "bodi": [2, 3], "newvar": 2, "similarli": [2, 3, 5], "newvar2": 2, "newfun": 2, "sum": [2, 3, 5, 6], "On": [2, 5, 6], "hand": [2, 5, 6], "exist": [2, 5], "temporarili": 2, "memori": 2, "longer": [2, 4], "clariti": [2, 4, 6], "depend": 2, "definit": [2, 6], "found": [2, 5, 6], "error": [2, 3, 5, 6], "messag": [2, 5], "inde": [2, 5], "briefli": 2, "verifi": [2, 5], "less": [2, 3, 6], "intens": [2, 3], "signific": 2, "impact": 2, "speed": 2, "perform": 2, "focus": 2, "effici": [2, 3, 6], "standard": 2, "graph": [2, 4, 6], "correct": [2, 4, 5], "associ": 2, "conveni": [2, 3, 5, 6], "set": [2, 3, 4, 5, 6], "simplifi": 2, "look": 2, "point": [2, 4, 7], "minimum": 2, "maximum": 2, "applic": [2, 3], "loop": 2, "geometr": [2, 6], "seri": 2, "us": [3, 4, 7], "your": [3, 4, 5, 6, 7], "carri": 3, "sever": [3, 5], "success": 3, "provid": 3, "There": [3, 6], "fix": 3, "iter": 3, "variabl": [3, 6], "1st": 3, "2nd": 3, "until": [3, 7], "becom": [3, 6], "clear": [3, 6], "few": [3, 5], "function": [3, 5, 6], "print": 3, "screen": 3, "proce": [3, 6], "repetit": [3, 6], "task": [3, 6], "tenth": 3, "progress": 3, "14": [3, 5], "common": 3, "ratio": 3, "process": 3, "625": [3, 6], "3125": 3, "15625": 3, "078125": 3, "0390625": 3, "01953125": 3, "009765625": 3, "004882812": 3, "002441406": 3, "001220703": 3, "0006103516": 3, "0003051758": 3, "00030517578125": 3, "125th": 3, "effect": 3, "except": [3, 4], "124": 3, "125": 3, "350989e": 3, "37": 3, "scientif": 3, "put": 3, "noth": [3, 4], "els": [3, 4], "350989": 3, "times10": 3, "basic": [3, 5, 6], "confus": 3, "euler": 3, "altern": [3, 6], "5e": 3, "08": 3, "150000000": 3, "0000000000000000000000000000000000002350989": 3, "compar": 3, "magnitud": 3, "fact": [3, 5], "realli": 3, "necessari": 3, "ration": 3, "translat": 3, "35098870164458e": 3, "principl": 3, "situat": [3, 6], "favour": 3, "analyt": [3, 6], "numer": [3, 5, 7], "former": 3, "computation": [3, 5], "fast": 3, "spot": 3, "solv": 3, "give": 3, "fibonacci": 3, "f_1": 3, "f_2": 3, "f_3": 3, "recurs": 3, "f_n": 3, "f_": 3, "37th": 3, "35": [3, 5, 6], "reiniti": 3, "current": 3, "term": [3, 4, 6, 7], "f_i": 3, "14930352": 3, "present": 3, "econom": 3, "poor": 3, "practic": 3, "induc": 3, "sourc": [3, 7], "recognit": 3, "plug": 3, "yield": [3, 5], "99969482421875": 3, "updat": 3, "annuiti": 3, "bond": 3, "pai": 3, "100": [3, 6], "year": 3, "payment": 3, "todai": 3, "discount": 3, "rate": 3, "fair": 3, "price": 3, "05": 3, "tweak": 3, "answer": 3, "1308": 3, "5320859667": 3, "bivari": 3, "build": [4, 6], "upon": [4, 6], "materi": [4, 5, 6, 7], "gone": 4, "dimens": [4, 5], "order": [4, 6, 7], "revisit": 4, "logic": 4, "respect": 4, "ax": [4, 5, 6], "persp": 4, "denot": [4, 5, 6], "palc": 4, "everyth": 4, "singl": 4, "block": 4, "adjust": 4, "view": 4, "theta": 4, "phi": 4, "imagin": 4, "sphere": 4, "surround": 4, "along": 4, "longitud": 4, "latitud": 4, "angl": 4, "viewer": 4, "better": [4, 6], "lightblu": [4, 6], "ticktyp": 4, "detail": 4, "Of": [4, 5], "rememb": 4, "lot": [4, 6], "figur": 4, "represent": 4, "thicker": 4, "nlevel": 4, "area": [4, 6], "fill": 4, "indulg": 4, "featur": 4, "palett": 4, "whole": [4, 6], "cm": 4, "rainbow": 4, "anderson": 4, "movi": 4, "haven": 4, "watch": 4, "highli": 4, "wesanderson": 4, "grand": 4, "budapest": 4, "hotel": 4, "wes_palett": 4, "grandbudapest2": 4, "anyhow": 4, "util": 4, "u": 4, "indiffer": 4, "henc": 4, "kei": 4, "whether": 4, "75": 4, "2500": 4, "250": 4, "50": 4, "7511": 4, "251": 4, "51": 4, "752": 4, "32": [4, 5], "06251": 4, "56250": 4, "4375": 4, "9375": 4, "437500": 4, "56251": 4, "252": 4, "06253": 4, "combin": 4, "21": [4, 5], "1012345": 4, "121": 4, "dbl": 4, "41": 4, "34": [4, 5], "29": [4, 5], "26": 4, "18": [4, 5], "dimension": 4, "arrai": [4, 5], "j": 4, "3rd": 4, "orderli": 4, "matric": 4, "conduct": [5, 6], "a1": 5, "a2": 5, "nrow": 5, "ncol": 5, "rearrang": 5, "compris": 5, "3": [5, 6], "times3": 5, "begin": 5, "bmatrix": 5, "otherwis": 5, "warn": 5, "sub": 5, "suppli": 5, "deduc": 5, "wise": 5, "byrow": 5, "quickli": [5, 6], "times2": 5, "times9": 5, "times1": 5, "dim": 5, "queri": 5, "ad": 5, "conform": 5, "meaningless": 5, "interpret": [5, 6], "being": 5, "shortcut": 5, "care": 5, "recognis": 5, "product": 5, "sign": [5, 6], "a_": 5, "b_": 5, "unsurprisingli": 5, "extra": 5, "23": 5, "78": 5, "24": 5, "76": 5, "88": 5, "65": 5, "72": 5, "42": 5, "56": 5, "81": 5, "Their": 5, "5417": 5, "3537": 5, "4358": 5, "7509": 5, "2670": 5, "3421": 5, "7241": 5, "10480": 5, "7965": 5, "53": 5, "64": 5, "70": 5, "87": 5, "96": 5, "det": 5, "286526": 5, "must": 5, "unknown": 5, "written": 5, "coeffici": 5, "neq0": 5, "method": [5, 6, 7], "cramer": 5, "known": [5, 6], "goe": 5, "beyond": [5, 6], "feel": [5, 7], "free": [5, 7], "commonli": 5, "i_": 5, "diagon": 5, "multipli": 5, "comform": 5, "scope": 5, "back": 5, "quit": [5, 6], "higher": [5, 6], "But": 5, "93": 5, "94": 5, "62": 5, "73": 5, "22": 5, "31": 5, "06555317": 5, "015105056": 5, "0169165843": 5, "013068083": 5, "04640397": 5, "03326893": 5, "008685351": 5, "0016609482": 5, "015518808": 5, "04306862": 5, "01924799": 5, "018045231": 5, "0043228707": 5, "006412682": 5, "00228883": 5, "05705412": 5, "005707990": 5, "0008036537": 5, "003578446": 5, "03725134": 5, "16033034": 5, "010871654": 5, "0009654094": 5, "008973683": 5, "20951104": 5, "pre": 5, "ix": 5, "proprerti": 5, "quad": 5, "x_3": 5, "x_4": 5, "x_5": 5, "91": 5, "extrem": 5, "invert": 5, "64782877": 5, "x_sol": 5, "55571816": 5, "27416868": 5, "01659472": 5, "07328040": 5, "18844674": 5, "556": 5, "274": 5, "017": 5, "073": 5, "188": 5, "integr": 5, "assum": 6, "exercis": 6, "solut": 6, "int_": 6, "dx": 6, "horizont": 6, "approach": 6, "1": 6, "anti": 6, "deriv": 6, "techniqu": [6, 7], "approxim": 6, "who": 6, "close": 6, "satisfi": 6, "formal": 6, "rectangl": 6, "fit": 6, "converg": 6, "infin": 6, "lead": 6, "vari": 6, "control": 6, "absolut": 6, "high": 6, "illustr": 6, "intuit": 6, "understood": 6, "hidden": 6, "central": 6, "unhid": 6, "polygon": 6, "rect": 6, "int_0": 6, "_0": 6, "140": 6, "approx46": 6, "666": 6, "shade": 6, "label": 6, "xpol": 6, "01": 6, "ypol": 6, "number_of_rectangl": 6, "xgrid": 6, "xs": 6, "ys": 6, "xleft": 6, "xright": 6, "beauti": 6, "carefulli": 6, "custom": 6, "step": 6, "lower": 6, "height": 6, "grid": 6, "endpoint": 6, "02": 6, "55": 6, "divid": 6, "delta": 6, "irrespect": 6, "sum_area": 6, "46": 6, "surpris": 6, "saw": 6, "improv": 6, "amount": 6, "bofor": 6, "667": 6, "milisecond": 6, "big": 6, "week": [6, 7], "excel": 6, "04375": 6, "10000": 6, "660416875": 6, "006": 6, "accuraci": 6, "trapezoid": 6, "hope": 6, "why": 6, "realiti": 6, "rare": 6, "upper": 6, "66667": 6, "2e": 6, "0000000000005": 6, "enjoi": 6, "thank": 6, "welcom": 7, "ec140": 7, "book": 7, "r": 7, "design": 7, "conjunct": 7, "moodl": 7, "page": 7, "mathemath": 7, "warwick": 7, "univers": 7, "person": 7, "download": 7, "recent": 7, "version": 7, "cran": 7, "instruct": 7, "desktop": 7, "websit": 7, "link": 7, "focu": 7, "content": 7, "cover": 7, "pleas": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"basic": [0, 1], "r": [0, 1, 2, 3, 4, 5, 6], "us": [0, 1, 2, 5, 6], "calcul": 0, "arithmet": 0, "oper": 0, "respect": 0, "order": [0, 5], "some": [0, 3], "import": 0, "mathemat": 0, "function": [0, 1, 2, 4], "evalu": [0, 3], "complex": 0, "express": 0, "solut": [0, 1, 2, 3, 4, 5], "exercis": [0, 1, 2, 3, 4, 5], "1": [0, 1, 2, 3, 4, 5], "ad": [0, 1], "comment": 0, "your": [0, 1, 2], "code": 0, "assign": 0, "valu": 0, "variabl": [0, 1, 2, 4], "2": [0, 1, 3, 4, 5], "vector": [0, 5], "construct": 0, "c": 0, "evenli": 0, "space": 0, "number": 0, "3": [0, 1, 2, 3, 4], "plot": [1, 2, 4], "The": 1, "point": 1, "option": [1, 2, 5], "argument": 1, "custom": [1, 2, 4], "set": 1, "one": 1, "step": [1, 4], "exampl": [1, 2, 3, 5], "A": [1, 2], "cubic": 1, "look": [1, 4], "simpl": 1, "graph": 1, "4": [1, 3], "latex": 1, "label": 1, "titl": 1, "addit": [1, 5], "same": 1, "grid": 1, "sever": [1, 2], "legend": 1, "text": 1, "annot": 1, "5": [1, 4], "vertic": 1, "horizont": 1, "line": 1, "ax": 1, "combin": 1, "multipl": [1, 5], "singl": 1, "figur": 1, "write": 2, "own": 2, "defin": [2, 5], "note": 2, "global": 2, "local": 2, "insid": 2, "loop": 3, "what": [3, 4, 6], "further": 3, "geometr": 3, "seri": 3, "formula": 3, "bivari": 4, "creat": 4, "3d": 4, "surfac": 4, "two": 4, "contour": 4, "so": 4, "doe": [4, 6], "outer": 4, "x": 4, "y": 4, "f": 4, "do": 4, "linear": 5, "algebra": 5, "matrix": 5, "arrang": 5, "element": 5, "row": 5, "6": 5, "column": 5, "work": [5, 6], "matric": 5, "check": 5, "transpos": 5, "scalar": 5, "anoth": 5, "system": 5, "equat": 5, "determin": 5, "invers": 5, "definit": 5, "ident": 5, "properti": 5, "solv": 5, "numer": 6, "integr": 6, "primer": 6, "how": 6, "from": 6, "first": 6, "principl": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})