/*********************************************************************
 * Copyright (c) 2017, Institute of Cancer Research
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * (1) Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 * (2) Redistributions in binary form must reproduce the above
 *     copyright notice, this list of conditions and the following
 *     disclaimer in the documentation and/or other materials provided
 *     with the distribution.
 *
 * (3) Neither the name of the Institute of Cancer Research nor the
 *     names of its contributors may be used to endorse or promote
 *     products derived from this software without specific prior
 *     written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *********************************************************************/
package icr.xnat.plugin.roi.entity;

import javax.persistence.Entity;
import org.nrg.framework.orm.hibernate.AbstractHibernateEntity;

/**
 *
 * @author jamesd
 */
@Entity
public class Roi extends AbstractHibernateEntity
{
	private String geometricType;
	private String name;
	private String roiCollectionId;
	private String uid;

	public Roi()
	{}

	/**
	 * @return the geometric type
	 */
	public String getGeometricType()
	{
		return geometricType;
	}

	/**
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * @return the ROI collection ID
	 */
	public String getRoiCollectionId()
	{
		return roiCollectionId;
	}

	/**
	 * @return the UID
	 */
	public String getUid()
	{
		return uid;
	}

	/**
	 * @param geometricType the geometric type to set
	 */
	public void setGeometricType(String geometricType)
	{
		this.geometricType = geometricType;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * @param roiCollectionId the ROI collection ID to set
	 */
	public void setRoiCollectionId(String roiCollectionId)
	{
		this.roiCollectionId = roiCollectionId;
	}

	/**
	 * @param uid the UID to set
	 */
	public void setUid(String uid)
	{
		this.uid = uid;
	}

}
