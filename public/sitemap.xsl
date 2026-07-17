<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Kairali Guru</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #202622;
            background-color: #F8F4EA;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            border: 1px solid #EFE7D6;
          }
          h1 {
            color: #006038;
            font-size: 26px;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 8px;
          }
          p.subtitle {
            color: #66726A;
            font-size: 13px;
            margin-bottom: 24px;
            line-height: 1.5;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
          }
          th {
            background-color: #006038;
            color: #F8F4EA;
            text-align: left;
            padding: 12px 14px;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          th:first-child {
            border-top-left-radius: 8px;
            width: 60%;
          }
          th:last-child {
            border-top-right-radius: 8px;
          }
          td {
            padding: 12px 14px;
            border-bottom: 1px solid #EFE7D6;
            font-size: 12px;
            word-break: break-all;
          }
          tr:hover td {
            background-color: #F8F4EA;
          }
          a {
            color: #006038;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            color: #C1882C;
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 600;
            background-color: #EFE7D6;
            color: #202622;
          }
          .priority-high {
            background-color: rgba(0, 96, 56, 0.1);
            color: #006038;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p class="subtitle">This XML sitemap is generated automatically for search engines (like Google and Bing) to crawl and index all pages on Kairali Guru. It currently contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
          <table>
            <thead>
              <tr>
                <th>URL Address</th>
                <th>Priority</th>
                <th>Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority-badge">
                      <xsl:if test="sitemap:priority &gt;= 0.8">
                        <xsl:attribute name="class">priority-badge priority-high</xsl:attribute>
                      </xsl:if>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
